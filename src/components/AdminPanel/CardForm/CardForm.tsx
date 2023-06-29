import { FC, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ICardForm } from "@/types";
import { CardScheme } from "@/schemas";
import { sendCard } from "@/services";
import ButtonSpiner from "@/components/ButtonSpiner";
import {
  FileInput,
  FileInputWrapper,
  StyledIcon,
  IconWrapper,
  Text,
  TextInput,
  DeleteFieldButton,
  StyledBin,
  AddFieldButton,
  StyledPlusIcon,
  SubmitButton,
  ErrorMessage,
} from "../CommonFormStyles";
import { Container } from "./CardForm.styled";

const CardForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICardForm>({
    mode: "all",
    resolver: yupResolver(CardScheme),
    defaultValues: {
      thumb: [],
      alt: "",
      title: "",
      description: [{ item: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "description",
  });

  const onSubmitHandler: SubmitHandler<ICardForm> = async data => {
    const formData = new FormData();
    formData.append("thumb", data.thumb[0]);
    formData.append("alt", data.alt);
    formData.append("title", data.title);
    formData.append(
      "description",
      JSON.stringify(data.description.map(({ item }) => item)),
    );

    try {
      setIsLoading(true);
      await sendCard(formData);
      toast.success("Нова картка успішно додана");
      router.push("/admin/cards");
    } catch (e) {
      toast.error("Сталася помилка, спробуйте пізніше");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FileInputWrapper>
        <FileInput
          type="file"
          accept="image/*,.png,.jpg,.webp"
          {...register("thumb")}
          onInput={(e: any) => setFileName(e.target.files[0].name)}
        />
        <IconWrapper>
          {fileName ? (
            <Text>{fileName}</Text>
          ) : (
            <>
              <StyledIcon />
              <Text>Додати зображення</Text>
            </>
          )}
        </IconWrapper>
      </FileInputWrapper>
      {errors.thumb && <ErrorMessage>{errors.thumb.message}</ErrorMessage>}

      <TextInput
        type="text"
        {...register("alt")}
        placeholder="Опис зображення"
      />
      {errors.alt && <ErrorMessage>{errors.alt.message}</ErrorMessage>}

      <TextInput type="text" {...register("title")} placeholder="Заголовок" />
      {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

      {fields.map((field, index) => (
        <div key={field.id}>
          <Container>
            <TextInput
              type="text"
              {...register(`description.${index}.item`)}
              placeholder="Опис пункту в інструкції"
              style={{ paddingRight: "50px" }}
            />
            {index > 0 && (
              <DeleteFieldButton onClick={() => remove(index)} type="button">
                <StyledBin />
              </DeleteFieldButton>
            )}
          </Container>
          {errors.description && (
            <ErrorMessage>
              {index === 0 ? "Обов'язкове поле" : "Заповніть поле або видаліть"}
            </ErrorMessage>
          )}
        </div>
      ))}

      <AddFieldButton onClick={() => append({ item: "" })} type="button">
        <StyledPlusIcon /> Додати пункт
      </AddFieldButton>

      <SubmitButton disabled={Object.values(errors).length > 0}>
        {isLoading ? <ButtonSpiner /> : "Надіслати"}
      </SubmitButton>
    </form>
  );
};

export default CardForm;
