import { FC } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ICardForm } from "@/types";
import { CardScheme } from "@/schemas";
import { getCards, sendCard, deleteCard } from "@/services";
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

/* test */
const getCardsList = async () => {
  try {
    const response: any = await getCards();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteOneCard = async (id: string) => {
  try {
    const response = await deleteCard(id);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
/*=====================*/

const CardForm: FC = () => {
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
      const response = await sendCard(formData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <hr />
      <p style={{ color: "red" }}>Отримати список карток</p>
      <button onClick={getCardsList}>Get cards</button>
      <button
        style={{ backgroundColor: "red", color: "white", marginLeft: "30px" }}
        onClick={() => deleteOneCard("1c46c8e0-a8f1-4057-804c-750af85f8b48")}
      >
        Delete card
      </button>
      <hr />
      <hr /> */}

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FileInputWrapper>
          <FileInput
            type="file"
            accept="image/*,.png,.jpg,.webp"
            {...register("thumb")}
          />
          <IconWrapper>
            <StyledIcon />
            <Text>Додати зображення</Text>
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
            <div style={{ position: "relative" }}>
              <TextInput
                type="text"
                {...register(`description.${index}.item`)}
                placeholder="Опис пункту в інструкції"
              />
              {index > 0 && (
                <DeleteFieldButton onClick={() => remove(index)} type="button">
                  <StyledBin />
                </DeleteFieldButton>
              )}
            </div>
            {errors.description && (
              <ErrorMessage>
                {index === 0
                  ? "Обов'язкове поле"
                  : "Заповніть поле або видаліть"}
              </ErrorMessage>
            )}
          </div>
        ))}

        <AddFieldButton onClick={() => append({ item: "" })} type="button">
          <StyledPlusIcon /> Додати пункт
        </AddFieldButton>

        <SubmitButton>Надіслати</SubmitButton>
      </form>
    </>
  );
};

export default CardForm;
