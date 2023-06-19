import { FC, useState } from "react";
import useSWR from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IContactForm } from "@/types";
import { ContactScheme } from "@/schemas";
import { getContacts, sendContacts } from "@/services";
import {
  Input,
  StyledEdit,
  StyledError,
  StyledLabel,
  SubTitle,
} from "./ContactsForm.styled";
import { SubmitButton } from "../CommonFormStyles";
import ButtonSpiner from "@/components/ButtonSpiner";

const fetcher = async () => {
  const data = await getContacts();
  return data;
};

const ContactForm: FC = () => {
  const { data, error } = useSWR("report", fetcher);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    mode: "all",
    resolver: yupResolver(ContactScheme),
    defaultValues: {
      phone1: data?.phone1,
      phone2: data?.phone2,
      email: data?.email,
    },
  });

  const onSubmitHandler: SubmitHandler<IContactForm> = async data => {
    try {
      setIsLoading(true);
      await sendContacts(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <SubTitle>Телефони</SubTitle>
      <StyledLabel>
        <Input type="text" {...register("phone1")} />
        <StyledEdit />
      </StyledLabel>
      {errors.phone1 && <StyledError>{errors.phone1.message}</StyledError>}
      <StyledLabel>
        <Input type="text" {...register("phone2")} />
        <StyledEdit />
      </StyledLabel>
      {errors.phone2 && <StyledError>{errors.phone2.message}</StyledError>}
      <SubTitle>Електронна пошта</SubTitle>
      <StyledLabel>
        <Input type="email" {...register("email")} />
        <StyledEdit />
      </StyledLabel>
      {errors.email && <StyledError>{errors.email.message}</StyledError>}

      <SubmitButton>{isLoading ? <ButtonSpiner /> : "Надіслати"}</SubmitButton>
    </form>
  );
};

export default ContactForm;
