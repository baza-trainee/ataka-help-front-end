import { FC } from "react";
import { Container, Section } from "../Common";
import PaymentButton from "../PaymentButton";
import { ImageContainer } from "./Donate.styled";
import Image from "next/image";
import { Gradient } from "../Slider/Slider.styled";

const DonateMainPage: FC = () => {
  return (
    <Section>
      <ImageContainer>
        <Gradient />
        <Image
          src={"/donate-img.png"}
          alt="Woman's hand"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </ImageContainer>
      <Container>
        <PaymentButton />
      </Container>
    </Section>
  );
};

export default DonateMainPage;
