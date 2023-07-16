import { useState } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ChangePasswordScheme } from "@/schemas";
import { IChangePassword } from "@/types";
import ButtonSpiner from "@/components/ButtonSpiner";
import { ErrorMessage, SubmitButton } from "../CommonFormStyles";
import { Form, Input, Label, Title } from "./ChangePasswordForm.styled";
import { changePassword } from "@/services";

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>({
    mode: "all",
    resolver: yupResolver(ChangePasswordScheme),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordConfirmed: "",
    },
  });
  const onSubmitHandler: SubmitHandler<IChangePassword> = async data => {
    try {
      setIsLoading(true);
      await changePassword(data);
      toast.success("Пароль успішно змінено");
    } catch (error: any) {
      if (error?.response?.data?.message === "wrong current password") {
        toast.error("Невірний старий пароль");
      } else {
        toast.error("Сталася помилка, спробуйте пізніше");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Title>Змінити пароль</Title>
      <Label>
        Введіть старий пароль
        <Input type="text" {...register("currentPassword")} />
      </Label>
      {errors.currentPassword && (
        <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>
      )}
      <Label>
        Введіть новий пароль
        <Input type="text" {...register("newPassword")} />
      </Label>
      {errors.newPassword && (
        <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
      )}
      <Label>
        Підтвердіть новий пароль
        <Input type="text" {...register("newPasswordConfirmed")} />
      </Label>
      {errors.newPasswordConfirmed && (
        <ErrorMessage>{errors.newPasswordConfirmed.message}</ErrorMessage>
      )}
      <SubmitButton disabled={Object.values(errors).length > 0}>
        {isLoading ? <ButtonSpiner /> : "Підтвердити"}
      </SubmitButton>
    </Form>
  );
};

export default ChangePasswordForm;
