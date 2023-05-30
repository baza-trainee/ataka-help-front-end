import React, { FC, useEffect, useState } from "react";
import {
  Box,
  BtnStyled,
  TextStyled,
  TitleStyled,
} from "./CookieConsentBanner.styled";

import FileOpenLink from "../FileOpenLink/FileOpenLink";

const CookieConsentBanner: FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("consent-google")) {
      setShowCookieBanner(false);
    }
  }, []);

  const acceptGoogle = (): void => {
    setShowCookieBanner(false);
    localStorage.setItem("consent-google", "true");
  };

  return (
    <>
      {showCookieBanner && (
        <Box>
          <div>
            <TitleStyled>Файли Cookies</TitleStyled>
            <TextStyled>
              Цей сайт використовує файли cookies для роботи і покращення
              сервісу. Дізнайтесь більше в{" "}
              <FileOpenLink
                isTextUnderline
                isCookiesButtonStyles
                text={"Політика конфіденційності"}
                path={"/files/politics.pdf"}
              />
            </TextStyled>
          </div>
          <BtnStyled onClick={acceptGoogle} type="button">
            ОК
          </BtnStyled>
        </Box>
      )}
    </>
  );
};

export default CookieConsentBanner;
