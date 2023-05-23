import { FC } from "react";

import PaymentButton from "../PaymentButton";

import { Section, Title } from "./Donate.styled";

const Donate: FC = () => {
  return (
    <Section>
      <Title>Задонатити</Title>
      <p>
        Зроби внесок на розвиток краудфандингу та соціальних інновацій в Україні
      </p>
      <PaymentButton />
    </Section>
  );
};

export default Donate;
