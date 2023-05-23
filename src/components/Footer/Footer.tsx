import { FC } from "react";

import NavLink from "../NavLink/NavLink";

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
  ContactItem,
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
            <Image
              src="/images/logo-footer.png"
              width={338}
              height={115}
              alt="logo"
            />
          </div>
          <LinkList>
            <li>{/* <NavLink href="/" name={"Інциденти"} /> */}</li>
            <li>{/* <NavLink href="/about" name={"Про проєкт"} /> */}</li>
            <li>
              <p>Звітність</p>
            </li>
            <li>
              <p>Політика конфіденційності</p>
            </li>
            <li>
              <p>Правила користування сайтом</p>
            </li>
          </LinkList>
          <ContactsWrapper>
            <ContactsList>
              <ContactItem>
                <Image src={phoneIcon} alt="phoneIcon" width={24} height={24} />
                <ContactsText href="tel:380932830000">
                  +38 063 628 6630
                </ContactsText>
              </ContactItem>
              <ContactItem>
                <Image src={emailIcon} alt="emailIcon" width={24} height={24} />
                <ContactsText href="mailto:example@gmail.com">
                  info@ataka-help.com.ua
                </ContactsText>
              </ContactItem>
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
