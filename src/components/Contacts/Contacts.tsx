import Image from "next/image";
import { FC } from "react";

import { Section, Container, Title } from "../Common";
import {
  Contact,
  DesktopContainer,
  FlexContainer,
  HiddenTitle,
  ImageContainer,
  Subtitle,
  TabletContainer,
} from "./Contacts.styled";

const ContactsSection: FC = () => {
  return (
    <Section ptm="32px" ptt="48px" ptd="60px">
      <Container>
        <TabletContainer>
          <HiddenTitle tab="none">
            <Title textAlignM="center">Контакти</Title>
          </HiddenTitle>
          <ImageContainer>
            <Image
              src={`/images/404-img.png`}
              alt="Universe"
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageContainer>
          <DesktopContainer>
            <HiddenTitle mob="none">
              <Title textAlignM="left">Контакти</Title>
            </HiddenTitle>
            <Subtitle>Телефони</Subtitle>
            {["+38 093 802 7214", "+38 063 628 6630"].map((item, index) => (
              <FlexContainer key={index}>
                <Image
                  src={`/icons/phone.svg`}
                  alt="Phone icon"
                  width={24}
                  height={24}
                  style={{ fill: "white" }}
                />
                <Contact>{item}</Contact>
              </FlexContainer>
            ))}
            <Subtitle>Електронна пошта</Subtitle>
            <FlexContainer>
              <Image
                src={`/icons/email.svg`}
                alt="Email icon"
                width={24}
                height={24}
                style={{ fill: "white" }}
              />
              <Contact>info@ataka-help.tech</Contact>
            </FlexContainer>
          </DesktopContainer>
        </TabletContainer>
      </Container>
    </Section>
  );
};

export default ContactsSection;
