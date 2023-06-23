import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import ButtonSpiner from "@/components/ButtonSpiner";
import { ErrorMessage, SubmitButton } from "../CommonFormStyles";
import { Form, Input, Label, Title } from "./ChangePasswordForm.styled";

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmation: string;
}

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IChangePassword>({
    mode: "all",
    //   resolver: yupResolver(CardScheme),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmation: "",
    },
  });
  const onSubmitHandler: SubmitHandler<IChangePassword> = async data => {
    try {
      setIsLoading(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Title>Змінити пароль</Title>
      <Label>
        Введіть старий пароль
        <Input type="text" {...register("oldPassword")} />
      </Label>
      {errors.oldPassword && (
        <ErrorMessage>{errors.oldPassword.message}</ErrorMessage>
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
        <Input type="text" {...register("confirmation")} />
      </Label>
      {errors.confirmation && (
        <ErrorMessage>{errors.confirmation.message}</ErrorMessage>
      )}
      <SubmitButton disabled={Object.values(errors).length > 0}>
        {isLoading ? <ButtonSpiner /> : "Підтвердити"}
      </SubmitButton>
    </Form>
  );
};

export default ChangePasswordForm;
