import { FC } from "react";

import { Container, Section } from "../Common";
import PaymentButton from "../PaymentButton";
import {
  ButtonContainer,
  FlexContainer,
  Text,
  TextContainer,
} from "./Donate.styled";

const Donate: FC = () => {
  return (
    <Section>
      <Container>
        <FlexContainer>
          <TextContainer>
            <Text data-testid="TextBox1">
              Проєкт Ataka Help створено для інформування про найбільш поширені
              способи обману населення через інтернет. Ми зібрали для вас
              інциденти, які найчастіше трапляються з українцями, а також прості
              поради, як не стати легкою здобиччю аферистів.
            </Text>
            <br />
            <Text data-testid="TextBox2">
              Прості дієві способи захисту зроблять вас менш вразливими до атак
              і допоможуть зберегти своє від нападу.
            </Text>
          </TextContainer>
          <ButtonContainer>
            <PaymentButton />
          </ButtonContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Donate;
