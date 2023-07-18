import { FC } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { UsefulInformationProps } from "@/types";
import {
  Text,
  ImageContainer,
  TextContainer,
  FlexContainer,
  Wrapper,
  StyledTitle,
  StyledLink,
  Item,
} from "./UsefulInformation.styled";
import { Container, Section } from "../Common";

const UsefulInformation: FC<UsefulInformationProps> = props => {
  const { title, text1, text2 } = props;
  const pathName = usePathname();

  return (
    <>
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
      <Section>
        <Container>
          <ul>
            <Item>
              <StyledLink
                href="/useful-information/1"
                color={
                  pathName === "/useful-information/1" ? "#5D87F4" : "#010413"
                }
              >
                Як обрати пароль
              </StyledLink>
            </Item>
            <Item>
              <StyledLink
                href="/useful-information/2"
                color={
                  pathName === "/useful-information/2" ? "#5D87F4" : "#010413"
                }
              >
                Як замінити пароль до акаунту в соціальній мережі
              </StyledLink>
            </Item>
            <Item>
              <StyledLink
                href="/useful-information/3"
                color={
                  pathName === "/useful-information/3" ? "#5D87F4" : "#010413"
                }
              >
                Що таке двофакторна аутентифікація
              </StyledLink>
            </Item>
            <Item>
              <StyledLink
                href="/useful-information/4"
                color={
                  pathName === "/useful-information/4" ? "#5D87F4" : "#010413"
                }
              >
                Як обрати і встановити антивірус
              </StyledLink>
            </Item>
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default UsefulInformation;
