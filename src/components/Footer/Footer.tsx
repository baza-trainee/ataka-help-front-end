import { FC } from "react";

import NavLink from "../NavLink";
import FileOpenLink from "../FileOpenLink";

import logo from "../../assets/logo.png";
import phoneIcon from "../../assets/icons/phone.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import emailIcon from "../../assets/icons/email.svg";

import Image from "next/image";
import {
  StyledFooter,
  Container,
  Wrapper,
  ContactsWrapper,
  IconList,
  Copyright,
  ContactsText,
  IconLink,
  ContactsList,
  LinkList,
} from "./Footer.styled";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <div>
            <Image src={logo} width={354} height={181} alt="logo" />
          </div>
          <LinkList>
            <li>
              <NavLink href="/" name="Інциденти" fs="20px" lh="150%" />
            </li>
            <li>
              <NavLink href="/about" name="Про проєкт" fs="20px" lh="150%" />
            </li>
            <li>
              <FileOpenLink text="Звітність" path="/example.pdf" td="none" />
            </li>
            <li>
              <FileOpenLink
                text="Політика конфіденційності"
                path="/example.pdf"
                td="underline"
              />
            </li>
            <li>
              <FileOpenLink
                text="Правила користування сайтом"
                path="/example.pdf"
                td="underline"
              />
            </li>
          </LinkList>
          <ContactsWrapper>
            <ContactsList>
              <li>
                <ContactsText href="tel:380932830000">
                  <Image
                    src={phoneIcon}
                    alt="phoneIcon"
                    width={24}
                    height={24}
                  />
                  +38 063 628 6630
                </ContactsText>
              </li>
              <li>
                <ContactsText href="mailto:example@gmail.com">
                  <Image
                    src={emailIcon}
                    alt="emailIcon"
                    width={24}
                    height={24}
                  />
                  info@ataka-help.com.ua
                </ContactsText>
              </li>
            </ContactsList>

            <IconList>
              <li>
                <IconLink href="#" target="_blank">
                  <Image
                    src={facebookIcon}
                    alt="facebookIcon"
                    width={34}
                    height={33}
                  />
                </IconLink>
              </li>
              <li>
                <IconLink href="#" target="_blank">
                  <Image
                    src={linkedinIcon}
                    alt="linkedinIcon"
                    width={33}
                    height={33}
                  />
                </IconLink>
              </li>
            </IconList>
          </ContactsWrapper>
        </Wrapper>
        <Copyright>
          Розробка BazaTraineeUkraine 2023 &#169; Усі права захищені
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
