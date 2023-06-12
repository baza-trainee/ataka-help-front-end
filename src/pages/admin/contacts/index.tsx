import Head from "next/head";
import type { NextPage } from "next";
import ContactForm from "@/components/AdminPanel/ContactForm";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactForm />
      </main>
    </>
  );
};

export default Contacts;
