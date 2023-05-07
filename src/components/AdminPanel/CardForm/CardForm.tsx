import { FC } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ICardForm } from "@/types";
import { CardScheme } from "@/schemas";

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
      description: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "description",
  });

  const onSubmitHandler: SubmitHandler<ICardForm> = async (data) => {
    const formData = new FormData();
    formData.append("thumb", data.thumb[0]);
    formData.append("alt", data.alt);
    formData.append("title", data.title);
    formData.append("description", data.description);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        type="file"
        accept="image/*,.png,.jpg,.webP"
        {...register("thumb")}
      />
      {errors.thumb && <p>{errors.thumb.message}</p>}

      <input type="text" {...register("alt")} />
      {errors.alt && <p>{errors.alt.message}</p>}

      <input type="text" {...register("title")} />
      {errors.title && <p>{errors.title.message}</p>}

      {fields.map((field, index) => (
        <div key={field.id}>
          <input type="text" {...register(`description.${index}`)} />
          {errors.description && <p>{errors?.description[index]?.message}</p>}
          <button onClick={() => remove(index)} type="button">
            Delete field
          </button>
        </div>
      ))}

      <button onClick={() => append("")} type="button">
        Add field
      </button>

      <button>Submit</button>
    </form>
  );
};

export default CardForm;
