import { FC, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { IAdminLayout } from "@/types";

import { MainContainer, MainWrapper } from "./AdminLatout.styled";
import Header from "./Header";
import SideBar from "./SideBar";
import { Section } from "../CommonFormStyles";

const AdminLayout: FC<IAdminLayout> = ({ children, title }) => {
  const router = useRouter();

  useEffect(() => {
    let data = sessionStorage.getItem(
      `${process.env.NEXT_PUBLIC_SESSION_STORAGE_KEY}`,
    );
    if (data !== `${process.env.NEXT_PUBLIC_SESSION_STORAGE_VALUE}`) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainWrapper>
        <SideBar />
        <MainContainer>
          <Header />
          <Section>{children}</Section>
        </MainContainer>
      </MainWrapper>
    </>
  );
};

export default AdminLayout;
