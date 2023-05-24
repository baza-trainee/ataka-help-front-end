import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import { Global, ThemeProvider } from "@emotion/react";
import { global } from "@/styles/globals-style";
import { theme } from "@/theme";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>  
      <SessionProvider session={session}> 
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
