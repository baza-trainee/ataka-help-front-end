import { FC } from "react";
import useSWR from "swr";

import { getContacts } from "@/services";
import {
  Contact,
  EmailTitle,
  StyledLink,
  Subtitle,
} from "./ContactsSection.styled";

const ContactsSection: FC = () => {
  const { data } = useSWR("contacts", getContacts);
  return (
    <>
      <Subtitle>Телефони</Subtitle>
      <Contact>{data?.phone1}</Contact>
      <Contact>{data?.phone2}</Contact>
      <EmailTitle>Електронна пошта</EmailTitle>
      <Contact>{data?.email}</Contact>
      <StyledLink href={"/admin/contacts/form"}>Редагувати</StyledLink>
    </>
  );
};

export default ContactsSection;
