import { FC } from "react";
import { Container, Section } from "../Common";
import PaymentButton from "../PaymentButton";
import { ImageContainer } from "./Donate.styled";

const DonateMainPage: FC = () => {
  return (
    <Section>
      <ImageContainer></ImageContainer>
      <Container>
        <PaymentButton />
      </Container>
    </Section>
  );
};

export default DonateMainPage;
