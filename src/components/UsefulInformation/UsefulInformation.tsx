import { FC } from "react";
import Image from "next/image";

import image from "../../assets/rectangle.png";

import {
  Text,
  ImageContainer,
  TextContainer,
  FlexContainer,
} from "./UsefulInformation.styled";
import { Container, Section, Title } from "../Common";
import { UsefulInformationProps } from "@/types/UsefulInformationProps";

const UsefulInformation: FC<UsefulInformationProps> = props => {
  const { title, text1, text2 } = props;

  return (
    <Section>
      <Container>
        <Title textAlignM="center" style={{ paddingBottom: "40px" }}>
          {title}
        </Title>
        <FlexContainer>
          <ImageContainer>
            <Image
              src={image}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 320px) 360px, (min-width: 834px) 754px, (min-width: 1440px) 628px"
            />
          </ImageContainer>
          <TextContainer>{text1}</TextContainer>
        </FlexContainer>
        <FlexContainer>
          <ImageContainer>
            <Image
              src={image}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 320px) 360px, (min-width: 834px) 754px, (min-width: 1440px) 628px"
            />
          </ImageContainer>
          <TextContainer>
            <Text>{text2}</Text>
          </TextContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default UsefulInformation;
