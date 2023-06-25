import { FC } from "react";
import Image from "next/image";

import {
  Text,
  ImageContainer,
  TextContainer,
  FlexContainer,
} from "./UsefulInformation.styled";
import { Container, Section, Title } from "../Common";
import { UsefulInformationProps } from "@/types/components/UsefulInformationProps";

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
              src={"/images/two-factor-auth1.png"}
              alt="UsefulInformation1"
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageContainer>
          <TextContainer>{text1}</TextContainer>
        </FlexContainer>
        <FlexContainer>
          <ImageContainer>
            <Image
              src={"/images/two-factor-auth2.png"}
              alt="UsefulInformation2"
              fill
              style={{ objectFit: "cover" }}
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
