import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IReportForm } from "@/types";
import { ReportScheme } from "@/schemas";
import { sendReport } from "@/services";
import {
  FileInput,
  FileInputWrapper,
  IconWrapper,
  Section,
  StyledIcon,
  SubmitButton,
  Text,
} from "../CommonFormStyles";

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
    <Section>
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
    </Section>
  );
};

export default ReportForm;
