import { FC } from "react";
import Image from "next/image";

import NavLink from "../NavLink/NavLink";
import FileOpenLink from "../FileOpenLink/FileOpenLink";

import { Container } from "../Common";
import {
  StyledFooter,
  Wrapper,
  ContactsWrapper,
  IconList,
  Copyright,
  ContactsText,
  ContactItem,
  IconLink,
  ContactsList,
  LinkList,
  ImageContainer,
  ListItem,
} from "./Footer.styled";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image
              src="/images/logo.png"
              fill
              sizes="(min-width: 320px) 173px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
              alt="logo"
            />
          </ImageContainer>
          <LinkList>
            <ListItem>
              <NavLink href="/" isFooter={true}>
                Інциденти
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink href="/about" isFooter={true}>
                Про проєкт
              </NavLink>
            </ListItem>
            <ListItem>
              <FileOpenLink
                text="Звітність"
                path="/files/report.pdf"
                isFooterButtonStyles={true}
              />
            </ListItem>
            <ListItem>
              <FileOpenLink
                text="Політика конфіденційності"
                path="/files/politics.pdf"
                isTextUnderline
                isFooterButtonStyles={true}
              />
            </ListItem>
            <ListItem>
              <FileOpenLink
                text="Правила користування сайтом"
                path="/files/rules.pdf"
                isTextUnderline
                isFooterButtonStyles={true}
              />
            </ListItem>
          </LinkList>
          <ContactsWrapper>
            <ContactsList>
              <ContactItem>
                <Image
                  src={"icons/phone-footer.svg"}
                  alt="phoneIcon"
                  width={24}
                  height={24}
                />
                <ContactsText href="tel:380932830000">
                  +38 093 802 7214
                </ContactsText>
              </ContactItem>
              <ContactItem>
                <Image
                  src={"icons/phone-footer.svg"}
                  alt="phoneIcon"
                  width={24}
                  height={24}
                />
                <ContactsText href="tel:380932830000">
                  +38 063 628 6630
                </ContactsText>
              </ContactItem>
              <ContactItem>
                <Image
                  src={"icons/email-footer.svg"}
                  alt="emailIcon"
                  width={24}
                  height={24}
                />
                <ContactsText href="mailto:example@gmail.com">
                  info@ataka-help.tech
                </ContactsText>
              </ContactItem>
            </ContactsList>

            <IconList>
              <li>
                <IconLink href="#" target="_blank">
                  <Image
                    src={"/icons/facebook.svg"}
                    alt="facebookIcon"
                    width={33}
                    height={33}
                  />
                </IconLink>
              </li>
              <li>
                <IconLink href="#" target="_blank">
                  <Image
                    src={"/icons/linkedin.svg"}
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
