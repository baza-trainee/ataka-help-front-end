import { FC, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPartnerForm } from "@/types";
import { FileScheme } from "@/schemas";
import { sendPartner } from "@/services";
import ButtonSpiner from "@/components/ButtonSpiner";
import {
  ErrorMessage,
  FileInput,
  FileInputWrapper,
  IconWrapper,
  StyledIcon,
  SubmitButton,
  Text,
  TextInput,
} from "../CommonFormStyles";

const PartnerForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const router = useRouter();

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
      setIsLoading(true);
      await sendPartner(formData);
      toast.success("Нового партнера успішно додано");
      router.push("/admin/partners");
    } catch (e) {
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
          accept="image/*,.png,.jpg,.webp,.svg"
          {...register("thumb")}
          onInput={(e: any) => setFileName(e.target.files[0].name)}
        />
        <IconWrapper>
          {fileName ? (
            <Text>{fileName}</Text>
          ) : (
            <>
              <StyledIcon />
              <Text>Додати зображення</Text>
            </>
          )}
        </IconWrapper>
      </FileInputWrapper>
      {errors.thumb && <ErrorMessage>{errors.thumb.message}</ErrorMessage>}

      <TextInput
        type="text"
        {...register("alt")}
        placeholder="Опис зображення"
      />
      {errors.alt && <ErrorMessage>{errors.alt.message}</ErrorMessage>}

      <SubmitButton disabled={Object.values(errors).length > 0}>
        {isLoading ? <ButtonSpiner /> : "Надіслати"}
      </SubmitButton>
    </form>
  );
};

export default PartnerForm;
