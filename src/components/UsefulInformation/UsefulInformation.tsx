import { FC } from "react";
import Image from "next/image";

import image from "../../assets/rectangle.png";

import {
  Text,
  ImageContainer,
  TextContainer,
  FlexContainer,
} from "./UsefulInformation.styled";
import { Container, Section, Title } from "../Common";
import { UsefulInformationProps } from "@/types/UsefulInformationProps";

const UsefulInformation: FC<UsefulInformationProps> = props => {
  const { title } = props;

  return (
    <Section>
      <Container>
        <Title textAlignM="center">{title}</Title>
        <FlexContainer>
          <ImageContainer>
            <Image
              src={image}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 320px) 360px, (min-width: 834px) 754px, (min-width: 1440px) 628px"
            />
          </ImageContainer>
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
          <ImageContainer>
            <Image
              src={image}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 320px) 360px, (min-width: 834px) 754px, (min-width: 1440px) 628px"
            />
          </ImageContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default UsefulInformation;
