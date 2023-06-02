import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IReportForm } from "@/types";
import { ReportScheme } from "@/schemas";

//test
import axios from "axios";

const test = async (data: any) => {
  const response = await axios.put("https://foradmin.fun/reports", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

const testGet = async () => {
  const response = await axios.get("https://foradmin.fun/reports");
  console.log(response);
};

const getDoc = async () => {
  try {
    const response: any = await testGet();
  } catch (error) {
    console.log(error);
  }
};
//test

const ReportForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReportForm>({
    mode: "all",
    resolver: yupResolver(ReportScheme),
    defaultValues: {
      thumb: [],
    },
  });

  const onSubmitHandler: SubmitHandler<IReportForm> = async data => {
    const formData = new FormData();
    formData.append("thumb", data.thumb[0]);

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
      <p style={{ color: "red" }}>Отримати файл</p>
      <button onClick={getDoc}>Get file</button>

      <hr />
      <hr />
      <p style={{ color: "red" }}>Відправити файл:</p>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="file" accept=".pdf" {...register("thumb")} />
        {errors.thumb && <p>{errors.thumb.message}</p>}
        <p style={{ color: "red" }}>Відправлення</p>
        <button>Submit</button>
      </form>
    </>
  );
};

export default ReportForm;
