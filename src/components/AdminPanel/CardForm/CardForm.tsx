import { FC } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ICardForm } from "@/types";
import { CardScheme } from "@/schemas";
import { getCards, sendCard } from "@/services";

/* test */
const getCardsList = async () => {
  try {
    const response: any = await getCards();
    console.log(response);
  } catch (error) {
    console.log(error);
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
      <hr />
      <p style={{ color: "red" }}>Отримати список карток</p>
      <button onClick={getCardsList}>Get cards</button>

      <hr />
      <hr />
      <p style={{ color: "red" }}>Відправити картку:</p>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <p style={{ color: "red" }}>Завантажити файл</p>
        <input
          type="file"
          accept="image/*,.png,.jpg,.webp"
          {...register("thumb")}
        />
        {errors.thumb && <p>{errors.thumb.message}</p>}
        <p style={{ color: "red" }}>Ввести опис зображення</p>
        <input type="text" {...register("alt")} />
        {errors.alt && <p>{errors.alt.message}</p>}
        <p style={{ color: "red" }}>Ввести заголовок картки</p>
        <input type="text" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
        <p style={{ color: "red" }}>
          Ввести опис для картки(динамічне додавання полів)
        </p>
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
        <p style={{ color: "red" }}>Відправлення</p>
        <button>Submit</button>
      </form>
    </>
  );
};

export default CardForm;
