import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ISliderForm } from "@/types";
import { SliderScheme } from "@/schemas";
import { deleteSlide, getSlider, sendSlide } from "@/services";

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
      <p style={{ color: "red" }}>Відправити слайд:</p>
      <br />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <p style={{ color: "red" }}>Завантажити файл</p>
        <input
          type="file"
          accept="image/*,.png,.jpg,.webp,.svg"
          {...register("thumb")}
        />
        {errors.thumb && <p>{errors.thumb.message}</p>}
        <p style={{ color: "red" }}>Ввести опис зображення</p>
        <input type="text" {...register("alt")} />
        {errors.alt && <p>{errors.alt.message}</p>}
        <p style={{ color: "red" }}>Ввести заголовок для слайду</p>
        <input type="text" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
        <p style={{ color: "red" }}>Відправлення</p>
        <button>Submit</button>
      </form>
    </>
  );
};

export default SliderForm;
