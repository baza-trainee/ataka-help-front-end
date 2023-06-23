import { FC, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IContactForm } from "@/types";
import { ContactScheme } from "@/schemas";
import { getContacts, sendContacts } from "@/services";
import ButtonSpiner from "@/components/ButtonSpiner";
import {
  Input,
  StyledEdit,
  StyledError,
  StyledLabel,
  SubTitle,
} from "./ContactsForm.styled";
import { SubmitButton } from "../CommonFormStyles";

const ContactForm: FC = () => {
  const router = useRouter();
  const { data } = useSWR("contacts", getContacts);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    mode: "all",
    resolver: yupResolver(ContactScheme),
  });

  const onSubmitHandler: SubmitHandler<IContactForm> = async data => {
    try {
      setIsLoading(true);
      await sendContacts(data);
      router.push("/admin/contacts");
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <SubTitle>Телефони</SubTitle>
      <StyledLabel>
        <Input
          type="text"
          {...register("phone1")}
          defaultValue={data?.phone1}
        />
        <StyledEdit />
      </StyledLabel>
      {errors.phone1 && <StyledError>{errors.phone1.message}</StyledError>}
      <StyledLabel>
        <Input
          type="text"
          {...register("phone2")}
          defaultValue={data?.phone2}
        />
        <StyledEdit />
      </StyledLabel>
      {errors.phone2 && <StyledError>{errors.phone2.message}</StyledError>}
      <SubTitle>Електронна пошта</SubTitle>
      <StyledLabel>
        <Input type="email" {...register("email")} defaultValue={data?.email} />
        <StyledEdit />
      </StyledLabel>
      {errors.email && <StyledError>{errors.email.message}</StyledError>}

      <SubmitButton disabled={Object.values(errors).length > 0}>
        {isLoading ? <ButtonSpiner /> : "Надіслати"}
      </SubmitButton>
    </form>
  );
};

export default ContactForm;
