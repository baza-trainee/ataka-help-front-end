import React, { FC, useEffect, useState } from "react";
import {
  BackdropCookieBanner,
  Box,
  BoxTextStyled,
  BtnStyled,
  TextStyled,
  TitleStyled,
} from "./CookieConsentBanner.styled";

import FileOpenLink from "../FileOpenLink/FileOpenLink";

const CookieConsentBanner: FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("consent-google")) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptGoogle = (): void => {
    setShowCookieBanner(false);
    localStorage.setItem("consent-google", "true");
  };

  return (
    <>
      {showCookieBanner && (
        <BackdropCookieBanner>
          <Box>
            <BoxTextStyled>
              <TitleStyled>Файли Cookies</TitleStyled>
              <TextStyled>
                Цей сайт використовує файли cookies для правильної роботи і
                покращення сервісу. Якщо ви погоджуєтесь з їхнім використанням,
                натисніть ОК. Більше інформації в{" "}
                <FileOpenLink
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
