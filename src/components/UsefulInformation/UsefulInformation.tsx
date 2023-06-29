import { FC } from "react";
import Image from "next/image";

import {
  Text,
  ImageContainer,
  TextContainer,
  FlexContainer,
  Wrapper,
  StyledTitle,
} from "./UsefulInformation.styled";
import { Container, Section } from "../Common";
import { UsefulInformationProps } from "@/types";

const UsefulInformation: FC<UsefulInformationProps> = props => {
  const { title, text1, text2 } = props;

  return (
    <Section>
      <Container>
        <StyledTitle textAlignM="center">{title}</StyledTitle>
        <Wrapper>
          <FlexContainer>
            <ImageContainer>
              <Image
                src={"/images/two-factor-auth1.png"}
                alt="UsefulInformation1"
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageContainer>
            <TextContainer>
              <Text data-testid="TextBox1">{text1[1]}</Text>
              <br />
              <Text data-testid="TextBox2">{text1[2]}</Text>
              <br />
              <Text data-testid="TextBox3">{text1?.[3]}</Text>
            </TextContainer>
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
            <TextContainer style={{ marginBottom: 0 }}>
              <Text data-testid="TextBox1">{text2[1]}</Text>
              <br />
              <Text data-testid="TextBox2">{text2[2]}</Text>
              <br />
              <Text data-testid="TextBox3">{text2?.[3]}</Text>
            </TextContainer>
          </FlexContainer>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default UsefulInformation;
