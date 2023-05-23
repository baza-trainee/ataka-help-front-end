import React, { FC, useState } from 'react';
import { Box, BtnStyled } from './CookieConsentBanner.styled';

const CookieConsentBanner: FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  return (
    <>
      {showCookieBanner && (
        <Box>
          <div>
            <h3>Файли Cookies</h3>
            <p>
              Цей сайт використовує файли cookies для роботи і покращення
              сервісу. Дізнайтесь більше в{' '}
              <a href="">Політика конфіденційності</a>
            </p>
          </div>
          <BtnStyled type="button">ОК</BtnStyled>
        </Box>
      )}
    </>
  );
};

export default CookieConsentBanner;
