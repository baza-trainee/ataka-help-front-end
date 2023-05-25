import type { AppProps } from "next/app";

import { Global, ThemeProvider } from "@emotion/react";
import { global } from "@/styles/globals-style";
import { theme } from "@/theme";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
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
              src="https://www.googletagmanager.com/gtag/js?id=G-H3V4LY0BDM"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H3V4LY0BDM');
          `}
            </Script>
          </>
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
