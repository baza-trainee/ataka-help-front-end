import Head from "next/head";
import type { NextPage } from "next";
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default Login;