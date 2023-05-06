import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { global } from "@/styles/globals-style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
