import { FC } from "react";
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
import { Section, SubmitButton } from "../CommonFormStyles";

/* test */
const getContactsList = async () => {
  try {
    const response: any = await getContacts();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
/*=====================*/

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    mode: "all",
    resolver: yupResolver(ContactScheme),
    defaultValues: {
      phone1: "+38 093 802 7214",
      phone2: "+38 063 628 6630",
      email: "info@ataka-help.tech",
    },
  });

  const onSubmitHandler: SubmitHandler<IContactForm> = async data => {
    try {
      console.log(data);
      const response = await sendContacts(data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Section>
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

        <SubmitButton>Надіслати</SubmitButton>
      </form>
    </Section>
  );
};

export default ContactForm;
