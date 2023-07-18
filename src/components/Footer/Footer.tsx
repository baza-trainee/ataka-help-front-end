import { FC } from "react";
import Image from "next/image";

import { FacebookIcon, LinkedinIcon } from "@/assets/icons";
import { FooterPropsType } from "@/types";

import { Container } from "../Common";
import PDFReader from "../PDFReader";
import NavLink from "../NavLink";
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

const Footer: FC<FooterPropsType> = ({
  contacts: { phone1, phone2, email },
  report: { file },
}) => {
  const phoneOne = phone1;
  const phoneTwo = phone2;
  const emailOne = email;
  const reportPath = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${file}`;

  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image
              src="/images/logo.svg"
              fill
              sizes="(min-width: 320px) 173px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
              alt="logo"
            />
          </ImageContainer>
          <LinkList>
            <ListItem data-testid="TextBox1">
              <NavLink href="/" isFooter={true}>
                Інциденти
              </NavLink>
            </ListItem>
            <ListItem data-testid="TextBox2">
              <NavLink href="/about" isFooter={true}>
                Про проєкт
              </NavLink>
            </ListItem>
            {file && (
              <ListItem>
                <PDFReader
                  text="Звітність"
                  path={reportPath}
                  isFooterButtonStyles={true}
                />
              </ListItem>
            )}


            <ListItem>
              <PDFReader

                text="Політика конфіденційності"
                path="/files/politics.pdf"
                isTextUnderline
                isFooterButtonStyles={true}
              />
            </ListItem>

            <ListItem>
              <PDFReader

                text="Правила користування сайтом"
                path="/files/rules.pdf"
                isTextUnderline
                isFooterButtonStyles={true}
              />
            </ListItem>
          </LinkList>
          <ContactsWrapper>
            <ContactsList>
              {phoneOne && (
                <ContactItem>
                  <Image
                    src={"/icons/phone-footer.svg"}
                    alt="phoneIcon"
                    width={24}
                    height={24}
                  />
                  <ContactsText href="tel:380932830000">
                    {phoneOne}
                    {/* +38 093 802 7214 */}
                  </ContactsText>
                </ContactItem>
              )}
              {phoneTwo && (
                <ContactItem>
                  <Image
                    src={"/icons/phone-footer.svg"}
                    alt="phoneIcon"
                    width={24}
                    height={24}
                  />
                  <ContactsText href="tel:380932830000">
                    {phoneTwo}
                    {/* +38 063 628 6630 */}
                  </ContactsText>
                </ContactItem>
              )}
              {emailOne && (
                <ContactItem>
                  <Image
                    src={"/icons/email-footer.svg"}
                    alt="emailIcon"
                    width={24}
                    height={24}
                  />
                  <ContactsText href="mailto:example@gmail.com">
                    {emailOne}
                    {/* info@ataka-help.tech */}
                  </ContactsText>
                </ContactItem>
              )}
            </ContactsList>

            <IconList>
              <li>
                <IconLink href="#" target="_blank">
                  <FacebookIcon />
                </IconLink>
              </li>
              <li>
                <IconLink href="#" target="_blank">
                  <LinkedinIcon />
                </IconLink>
              </li>
            </IconList>
          </ContactsWrapper>
        </Wrapper>
        <Copyright data-testid="TextBox5">
          Розробка BazaTraineeUkraine 2023 &#169; Усі права захищені
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
