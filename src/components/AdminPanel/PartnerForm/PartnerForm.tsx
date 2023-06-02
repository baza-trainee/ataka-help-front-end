import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPartnerForm } from "@/types";
import { FileScheme } from "@/schemas";

//test
import axios from "axios";

const test = async (data: any) => {
  const response = await axios.post("https://foradmin.fun/partners", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

const testGet = async () => {
  const response = await axios.get("https://foradmin.fun/partners");
  console.log(response);
};

const getPartners = async () => {
  try {
    const response: any = await testGet();
  } catch (error) {
    console.log(error);
  }
};
//test

const PartnerForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPartnerForm>({
    mode: "all",
    resolver: yupResolver(FileScheme),
    defaultValues: {
      thumb: [],
      alt: "",
    },
  });

  const onSubmitHandler: SubmitHandler<IPartnerForm> = async data => {
    const formData = new FormData();
    formData.append("thumb", data.thumb[0]);
    formData.append("alt", data.alt);
    try {
      const response = await test(formData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <hr />
      <p style={{ color: "red" }}>Отримати партнерів</p>

      <button onClick={getPartners}>Get logo</button>
      <br />
      <hr />
      <hr />
      <p style={{ color: "red" }}>Відправити логотип партнера:</p>
      <br />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <p style={{ color: "red" }}>Завантажити файл</p>
        <input
          type="file"
          accept="image/*,.png,.jpg,.webp,.svg"
          {...register("thumb")}
        />
        {errors.thumb && <p>{errors.thumb.message}</p>}

        <p style={{ color: "red" }}>Ввести опис лого</p>
        <input type="text" {...register("alt")} />
        {errors.alt && <p>{errors.alt.message}</p>}

        <p style={{ color: "red" }}>Відправлення</p>

        <button>Submit</button>
      </form>
    </>
  );
};

export default PartnerForm;
