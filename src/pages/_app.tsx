import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Global, ThemeProvider } from "@emotion/react";
import { global } from "../styles/globals-style";
import { theme } from "../theme";
import Script from "next/script";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const [useScript, setUseScript] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("consent-google")) {
      setUseScript(true);
    }
  }, []);
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          {useScript && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}');
    `}
              </Script>
            </>
          )}
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
          <ToastContainer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
