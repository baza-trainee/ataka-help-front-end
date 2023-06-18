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
              sizes="(min-width: 320px) 302px, (min-width: 834px) 329px, (min-width: 1440px) 464px"
            />
          </ImageContainer>
          <DesktopContainer>
            <HiddenTitle mob="none">
              <Title textAlignM="left" data-testid="ContactHeading">Контакти</Title>
            </HiddenTitle>
            <Subtitle data-testid="ContactSubtitle1">Телефони</Subtitle>
            {["+38 093 802 7214", "+38 063 628 6630"].map((item, index) => (
              <FlexContainer key={index}>
                <Image
                  src={`/icons/phone.svg`}
                  alt="Phone icon"
                  width={24}
                  height={24}
                  style={{ fill: "white" }}
                />
                <Contact data-testid="Phonenumbers">{item}</Contact>
              </FlexContainer>
            ))}
            <Subtitle data-testid="ContactSubtitle2">Електронна пошта</Subtitle>
            <FlexContainer>
              <Image
                src={`/icons/email.svg`}
                alt="Email icon"
                width={24}
                height={24}
                style={{ fill: "white" }}
              />
              <Contact data-testid="ContactInfo">info@ataka-help.tech</Contact>
            </FlexContainer>
          </DesktopContainer>
        </TabletContainer>
      </Container>
    </Section>
  );
};

export default ContactsSection;
