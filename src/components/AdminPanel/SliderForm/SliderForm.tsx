import { FC, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ISliderForm } from "@/types";
import { SliderScheme } from "@/schemas";
import { sendSlide } from "@/services";
import {
  ErrorMessage,
  FileInput,
  FileInputWrapper,
  IconWrapper,
  StyledIcon,
  SubmitButton,
  Text,
  TextInput,
} from "../CommonFormStyles";
import ButtonSpiner from "@/components/ButtonSpiner";

const SliderForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISliderForm>({
    mode: "all",
    resolver: yupResolver(SliderScheme),
    defaultValues: {
      thumb: [],
      alt: "",
      title: "",
    },
  });

  const onSubmitHandler: SubmitHandler<ISliderForm> = async data => {
    const formData = new FormData();
    formData.append("thumb", data.thumb[0]);
    formData.append("alt", data.alt);
    formData.append("title", data.title);

    try {
      setIsLoading(true);
      await sendSlide(formData);
      toast.success("Слайд успішно додано");
      router.push("/admin/slider");
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
          accept="image/*,.png,.jpg,.webp,.svg"
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

      <SubmitButton disabled={Object.values(errors).length > 0}>
        {isLoading ? <ButtonSpiner /> : "Надіслати"}
      </SubmitButton>
    </form>
  );
};

export default SliderForm;
