import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IContactForm } from "@/types";
import { ContactScheme } from "@/schemas";

//test
import axios from "axios";

const test = async (data: any) => {
  const response = await axios.put("https://foradmin.fun/contacts", data);
  return response;
};

const testGet = async () => {
  const response = await axios.get("https://foradmin.fun/contacts");
  console.log(response);
};

const getContacts = async () => {
  try {
    const response: any = await testGet();
  } catch (error) {
    console.log(error);
  }
};
//test

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
      const response = await test(data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <hr />
      <p style={{ color: "red" }}>Отримати контакти</p>
      <button onClick={getContacts}>Get contacts</button>

      <hr />
      <hr />
      <p style={{ color: "red" }}>Відправити контакти:</p>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" {...register("phone1")} />
        {errors.phone1 && <p>{errors.phone1.message}</p>}
        <input type="text" {...register("phone2")} />
        {errors.phone2 && <p>{errors.phone2.message}</p>}
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <p style={{ color: "red" }}>Відправлення</p>
        <button>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
