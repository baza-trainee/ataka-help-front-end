import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IReportForm } from "@/types";
import { ReportScheme } from "@/schemas";
import { getReport, sendReport } from "@/services";

/* test */
const getReportDoc = async () => {
  try {
    const response: any = await getReport();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
/*=====================*/

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
      const response = await sendReport(formData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <hr />
      <p style={{ color: "red" }}>Отримати файл</p>
      <button onClick={getReportDoc}>Get file</button>

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
