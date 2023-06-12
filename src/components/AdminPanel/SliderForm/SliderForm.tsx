import { FC } from "react";
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
  Section,
  StyledIcon,
  SubmitButton,
  Text,
  TextInput,
} from "../CommonFormStyles";

const SliderForm: FC = () => {
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
      const response = await sendSlide(formData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FileInputWrapper>
          <FileInput
            type="file"
            accept="image/*,.png,.jpg,.webp,.svg"
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

        <SubmitButton>Надіслати</SubmitButton>
      </form>
    </Section>
  );
};

export default SliderForm;
