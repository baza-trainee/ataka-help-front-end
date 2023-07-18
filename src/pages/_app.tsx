import type { AppProps } from "next/app";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { global } from "../styles/globals-style";
import { theme } from "../theme";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const [useScript, setUseScript] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("consent-google")) {
      setUseScript(true);
    }
  }, []);
  return (
    <>
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
    </>
  );
}
