import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

const Report: NextPage = () => {
  return (
    <>
      <Head>
        <title>Кузщке</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Сторінка звітності
        <Link href={"/admin/report/form"}>Add report</Link>
      </main>
    </>
  );
};

export default Report;
