import { FC, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IReportForm } from "@/types";
import { ReportScheme } from "@/schemas";
import { sendReport } from "@/services";
import ButtonSpiner from "@/components/ButtonSpiner";
import {
  ErrorMessage,
  FileInput,
  FileInputWrapper,
  IconWrapper,
  StyledIcon,
  SubmitButton,
  Text,
} from "../CommonFormStyles";

const ReportForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const router = useRouter();

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
      setIsLoading(true);
      await sendReport(formData);
      toast.success("Звіт успішно додано");
      router.push("/admin/report");
    } catch (error) {
      toast.error("Сталася помилка, спробуйте пізніше");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FileInputWrapper>
        <FileInput
          type="file"
          accept=".pdf"
          {...register("thumb")}
          onInput={(e: any) => setFileName(e.target.files[0].name)}
        />
        <IconWrapper>
          {fileName ? (
            <Text>{fileName}</Text>
          ) : (
            <>
              <StyledIcon />
              <Text>Завантажити документ</Text>
            </>
          )}
        </IconWrapper>
      </FileInputWrapper>
      {errors.thumb && <ErrorMessage>{errors.thumb.message}</ErrorMessage>}

      <SubmitButton disabled={Object.values(errors).length > 0}>
        {isLoading ? <ButtonSpiner /> : "Надіслати"}
      </SubmitButton>
    </form>
  );
};

export default ReportForm;
