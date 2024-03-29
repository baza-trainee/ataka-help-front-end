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
  ImageGradient,
} from "./UsefulInformation.styled";
import { Container, Section } from "../Common";

const UsefulInformation: FC<UsefulInformationProps> = props => {
  const { title, text1, text2, src_1, src_2 } = props;
  const pathName = usePathname();

  return (
    <>
      <Section>
        <Container>
          <StyledTitle textAlignM="center">{title}</StyledTitle>
          <Wrapper>
            <FlexContainer>
              <ImageContainer>
                <ImageGradient />
                <Image
                  src={src_1}
                  alt="UsefulInformation1"
                  fill
                  sizes="(min-width: 320px) 320px, (min-width: 393px) 361px, (min-width: 768px) 704px, (min-width: 1280px) 560px, (min-width: 1440px) 628px"
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
            {text2[1] !== "" && (
              <FlexContainer>
                <ImageContainer>
                  <ImageGradient />
                  <Image
                    src={src_2}
                    alt="UsefulInformation2"
                    fill
                    sizes="(min-width: 320px) 320px, (min-width: 393px) 361px, (min-width: 768px) 704px, (min-width: 1280px) 560px, (min-width: 1440px) 628px"
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
            )}
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
                Як змінити пароль до акаунту в Facebook
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
                Як встановити антивірус
              </StyledLink>
            </Item>
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default UsefulInformation;
