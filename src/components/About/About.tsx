import { FC } from "react";
import Image from "next/image";

import {
  Text,
  ImageContainer,
  TextContainer,
  FlexContainer,
} from "./About.styled";
import { Container, Section, Title } from "../Common";

const About: FC = () => {
  return (
    <Section>
      <Container>
        <Title textAlignM="center">Про проєкт</Title>
        <FlexContainer>
          <ImageContainer>
            <Image
              src={"/images/about-page.png"}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 320px) 360px, (min-width: 834px) 754px, (min-width: 1440px) 628px"
            />
          </ImageContainer>
          <TextContainer>
            <Text>
              Шахрайство в мережі існує стільки ж, скільки сама мережа. При
              цьому жертвами шахраїв можуть стати як новачки, так і досвідчені
              користувачі.
            </Text>
            <br />
            <Text>
              Боротися з дрібним шахрайством дуже важко, оскільки втрати як
              правило відчутні, але некритичні для жертви. Разом з цим збитки
              учасників ринку-користувачів платіжних карток в 2022 році склали
              понад 480 млн.грн.
            </Text>
            <br />
            <Text>
              Середня сума однієї незаконної операції становила 2200 грн.
            </Text>
          </TextContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default About;
