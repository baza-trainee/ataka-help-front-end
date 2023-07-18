import React, { FC, useEffect, useState, useRef } from "react";

import PDFReader from "../PDFReader";
import {
  BackdropCookieBanner,
  Box,
  BoxTextStyled,
  BtnStyled,
  TextStyled,
  TitleStyled,
} from "./CookieConsentBanner.styled";

const CookieConsentBanner: FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!localStorage.getItem("consent-google")) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptGoogle = (): void => {
    setShowCookieBanner(false);
    localStorage.setItem("consent-google", "true");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && backdropRef.current) {
        event.preventDefault();
        const focusableElements = backdropRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (document.activeElement === lastElement && !event.shiftKey) {
          firstElement.focus();
        } else if (document.activeElement === firstElement && event.shiftKey) {
          lastElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {showCookieBanner && (
        <BackdropCookieBanner ref={backdropRef}>
          <Box>
            <BoxTextStyled>
              <TitleStyled>Файли Cookies</TitleStyled>
              <TextStyled>
                Цей сайт використовує файли cookies для правильної роботи і
                покращення сервісу. Якщо ви погоджуєтесь з їхнім використанням,
                натисніть ОК. Більше інформації в{" "}
                <PDFReader
                  isTextUnderline
                  isCookiesButtonStyles
                  text={"Політика конфіденційності"}
                  path={"/files/politics.pdf"}
                />
              </TextStyled>
            </BoxTextStyled>
            <BtnStyled onClick={acceptGoogle} type="button">
              ОК
            </BtnStyled>
          </Box>
        </BackdropCookieBanner>
      )}
    </>
  );
};

export default CookieConsentBanner;
