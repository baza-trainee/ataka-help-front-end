import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ISliderForm } from "@/types";
import { SliderScheme } from "@/schemas";
import { deleteSlide, getSlider, sendSlide } from "@/services";
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

//test

const getSlides = async () => {
  try {
    const response: any = await getSlider();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteOneSlide = async (id: string) => {
  try {
    const response = await deleteSlide(id);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
//test

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
    <>
      <hr />
      <p style={{ color: "red" }}>Отримати слайди</p>
      <button onClick={getSlides}>Get slides</button>
      <button
        style={{ backgroundColor: "red", color: "white", marginLeft: "30px" }}
        onClick={() => deleteOneSlide("")}
      >
        Delete slide
      </button>
      <hr />
      <hr />

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
    </>
  );
};

export default SliderForm;
