import { FC } from "react";
import { Container, Section } from "../Common";

import PaymentButton from "../PaymentButton";
import { FlexContainer, Text, TextContainer } from "./Donate.styled";

const Donate: FC = () => {
  return (
    <Section>
      <Container>
        <FlexContainer>
          <TextContainer>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque lacus
              vestibulum sed aliquet orci tristique convallis vulputate.
              Imperdiet non rhoncus cursus mattis nec et vestibulum odio. Erat
              hendrerit vitae auctor diam cursus adipiscing donec pharetra.
              Imperdiet non tincidunt eu massa lacus vitae rutrum eu sodales.
              Phasellus placerat donec sed praesent. Imperdiet orci pellentesque
              duis lorem egestas phasellus. Commodo nunc eu non amet imperdiet
              nec volutpat massa.
            </Text>
          </TextContainer>
          <PaymentButton />
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Donate;
