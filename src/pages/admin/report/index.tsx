import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import ReportSection from "@/components/AdminPanel/ReportSection";

const Report: NextPage = () => {
  return (
    <>
      <Head>
        <title>Report</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Сторінка звітності
        <ReportSection />
      </main>
    </>
  );
};

export default Report;
