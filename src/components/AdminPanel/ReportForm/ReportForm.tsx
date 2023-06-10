import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IReportForm } from "@/types";
import { ReportScheme } from "@/schemas";
import { deleteReport, getReport, sendReport } from "@/services";
import {
  FileInput,
  FileInputWrapper,
  IconWrapper,
  StyledIcon,
  SubmitButton,
  Text,
} from "../CommonFormStyles";

/* test */
const getReportDoc = async () => {
  try {
    const response: any = await getReport();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteDoc = async () => {
  try {
    const response = await deleteReport();
    console.log(response);
  } catch (e) {
    console.log(e);
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
      {/* <hr />
      <p style={{ color: "red" }}>Отримати файл</p>
      <button onClick={getReportDoc}>Get file</button>
      <button
        style={{ backgroundColor: "red", color: "white", marginLeft: "30px" }}
        onClick={deleteDoc}
      >
        Delete report
      </button>
      <hr /> */}

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FileInputWrapper>
          <FileInput type="file" accept=".pdf" {...register("thumb")} />
          <IconWrapper>
            <StyledIcon />
            <Text>Завантажити документ</Text>
          </IconWrapper>
        </FileInputWrapper>
        {errors.thumb && <p>{errors.thumb.message}</p>}

        <SubmitButton>Надіслати</SubmitButton>
      </form>
    </>
  );
};

export default ReportForm;
