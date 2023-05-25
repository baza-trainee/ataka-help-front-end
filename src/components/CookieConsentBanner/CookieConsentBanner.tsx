import React, { FC, useEffect, useState } from "react";
import { Box, BtnStyled } from "./CookieConsentBanner.styled";

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
            <h3>Файли Cookies</h3>
            <p>
              Цей сайт використовує файли cookies для роботи і покращення
              сервісу. Дізнайтесь більше в{" "}
              <a href="">Політика конфіденційності</a>
            </p>
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
