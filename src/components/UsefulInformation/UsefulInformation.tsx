import { FC } from "react";
import Image from "next/image";

import {
  Text,
  ImageContainer,
  ImageContainerLast,
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
          <TextContainer>
            <Text data-testid="TextBox1">
              Це спосіб, який гарантує, що доступ до ваших даних маєте тільки
              ви, навіть якщо ваш пароль попав до когось іншого.
            </Text>
            <br />
            <Text data-testid="TextBox2">
              Аутентифікація - це підтвердження, що ви -це саме ви. Перший
              фактор підтвердження - пароль, який ви встановлюєте до електронної
              пошти. Другий - найчастіше це СМС, що приходить на запит на ваш
              номер телефона.
            </Text>
            <br />
            <Text data-testid="TextBox3">
              Оскільки два фактори захисту розведені по різних гаджетах, це вас
              захищає двічі надійніше.
            </Text>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <ImageContainerLast>
            <Image
              src={"/images/two-factor-auth2.png"}
              alt="UsefulInformation2"
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageContainerLast>
          <TextContainer style={{ marginBottom: 0 }}>
            <Text data-testid="TextBox1">
              Більшість цифрових продуктів - пошти або банківського сервісу
              пропонують вам встановити двофакторну аутентифікацію, коли ви
              реєструєтесь в сервісі.
            </Text>
            <br />
            <Text data-testid="TextBox2">
              Не нехтуйте цим способом, особливо коли йдеться про банківські
              дані - так ви максимально захистите себе від крадіжки коштів.
            </Text>
            <br />
            <Text data-testid="TextBox3">
              Існує близько шести способів аутентифікації крім названих - також
              відбиток пальця, кодове слово та інші.
            </Text>
     
          </TextContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default UsefulInformation;
