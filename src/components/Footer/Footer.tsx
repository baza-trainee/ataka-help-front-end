import { FC } from "react";
import logoFooter from "../../assets/logoFooter.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";

import Image from "next/image";
import { StyledFooter } from "./Footer.styled";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="topBlock">
        <div className="topBlock-info">
          <Image src={logoFooter} width={150} height={58} alt="logo" />
        </div>
        <ul className="topBlock-nav">
          <li>
            <Link href="/"> Про проект</Link>
          </li>
          <li>
            <Link href="/">Інциденти</Link>
          </li>
          <li>
            <Link href="/">Політика конфіденційності</Link>
          </li>
          <li>
            <Link href="/">Правила користування сайтом</Link>
          </li>
        </ul>
        <ul className="topBlock-contacts">
          <li>
            <Image src={phoneIcon} alt="phoneIcon" />
            <Link href="tel:380932830000">+38 (093) 283 00 00</Link>
          </li>
          <li>
            <Image src={phoneIcon} alt="phoneIcon" />
            <Link href="tel:380932830000">+38 (093) 283 00 00</Link>
          </li>
          <li>
            <Image src={emailIcon} alt="emailIcon" />
            <Link href="mailto:example@gmail.com">example@gmail.com</Link>
          </li>
        </ul>
      </div>
      <div className="bottomBlock">
        <ul className="bottomBlock-social">
          <li>
            <Link href="https://instagram.com/" target="_blank">
              <Image src={instagramIcon} alt="instagramIcon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/" target="_blank">
              <Image src={facebookIcon} alt="facebookIcon" />
            </Link>
          </li>
        </ul>
        <p>Розробка Baza Trainee Ukraine 2023. Всі права захищені.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
