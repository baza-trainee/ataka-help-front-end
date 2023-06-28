import Image from "next/image";
import { FC } from "react";

import { ContactsPropsType } from "@/types";

import { Section, Container, Title } from "../Common";
import {
  Contact,
  DesktopContainer,
  Email,
  FlexContainer,
  HiddenTitle,
  ImageContainer,
  Phone,
  TabletContainer,
} from "./Contacts.styled";

const ContactsSection: FC<ContactsPropsType> = ({
  contacts: { phone1, phone2, email },
}) => {
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
            <Phone data-testid="ContactSubtitle1">Телефони</Phone>
            <FlexContainer>
              <Image
                src={`/icons/phone.svg`}
                alt="Phone icon"
                width={24}
                height={24}
                style={{ fill: "white" }}
              />
              <Contact data-testid="Phonenumber1">{phone1}</Contact>
            </FlexContainer>
            <FlexContainer>
              <Image
                src={`/icons/phone.svg`}
                alt="Phone icon"
                width={24}
                height={24}
                style={{ fill: "white" }}
              />
              <Contact data-testid="Phonenumber2">{phone2}</Contact>
            </FlexContainer>
            <Email data-testid="ContactSubtitle2">Електронна пошта</Email>
            <FlexContainer>
              <Image
                src={`/icons/email.svg`}
                alt="Email icon"
                width={24}
                height={24}
                style={{ fill: "white" }}
              />             
              <Contact data-testid="ContactInfo">{email}</Contact>
            </FlexContainer>
          </DesktopContainer>
        </TabletContainer>
      </Container>
    </Section>
  );
};

export default ContactsSection;
