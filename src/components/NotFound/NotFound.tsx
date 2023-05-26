import { FC } from "react";
import Image from "next/image";

import image from "../../assets/rectangle.png";
import { Container } from "../Common";
import {
  Section,
  TitleH1,
  StyledText,
  StyledDiv,
  StyledDivImg,
  StyledLink,
  StyledDivWrap,
} from "./NotFound.styled";

const NotFound: FC = () => {
  return (
    <Section>
      <Container>
        <StyledDiv>
          <StyledDivWrap>
            <TitleH1>404</TitleH1>
            <StyledText>Ми не знайшли сторінку, яку Ви шукаєте.</StyledText>
            <StyledText>Можливо, сталася помилка.</StyledText>
            <StyledLink href="/">На головну</StyledLink>
          </StyledDivWrap>
          <StyledDivImg>
            <Image src={image} alt="Image" width={466} height={466} />
          </StyledDivImg>
        </StyledDiv>
      </Container>
    </Section>
  );
};

export default NotFound;
