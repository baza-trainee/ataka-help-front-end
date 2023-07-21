import { FC } from "react";
import Head from "next/head";

import { LayoutPropsType } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const UserLayout: FC<LayoutPropsType> = ({
  title,
  children,
  contacts,
  report,
  content,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="uk" />
        <meta name="description" content={content} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ATAKA HELP" />
        <meta property="og:url" content="https://ataka-help.tech/" />
        <meta
          name="google-site-verification"
          content="eIzaFMR-qJZsyqQrZZakgX4uvkioJNascPxu9bFRmVg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer contacts={contacts} report={report} />
      <CookieConsentBanner />
    </>
  );
};

export default UserLayout;
