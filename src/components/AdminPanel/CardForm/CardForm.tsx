import { FC } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ICardForm } from "@/types";
import { CardScheme } from "@/schemas";

//test
import axios from "axios";

const test = async (data: any) => {
  const response = await axios.post("https://foradmin.fun/", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

const testGet = async () => {
  const response = await axios.get("https://foradmin.fun/");
  console.log(response);
};

const getList = async () => {
  try {
    const response: any = await testGet();
  } catch (error) {
    console.log(error);
  }
};
//test

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
      const response = await test(formData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button onClick={getList}>Get cards</button>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          type="file"
          accept="image/*,.png,.jpg,.webp"
          {...register("thumb")}
        />
        {errors.thumb && <p>{errors.thumb.message}</p>}

        <input type="text" {...register("alt")} />
        {errors.alt && <p>{errors.alt.message}</p>}

        <input type="text" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}

        {fields.map((field, index) => (
          <div key={field.id}>
            <input type="text" {...register(`description.${index}.item`)} />
            {errors.description && (
              <p>
                {index === 0
                  ? "Обов'язкове поле"
                  : "Заповніть поле або видаліть"}
              </p>
            )}
            {index > 0 && (
              <button onClick={() => remove(index)} type="button">
                Delete field
              </button>
            )}
          </div>
        ))}

        <button onClick={() => append({ item: "" })} type="button">
          Add field
        </button>

        <button>Submit</button>
      </form>
    </>
  );
};

export default CardForm;
