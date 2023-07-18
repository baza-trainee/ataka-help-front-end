import { FC } from "react";
import Image from "next/image";

import { Container, Section } from "../Common";
import NavLink from "../NavLink";
import {
  TitleH1,
  StyledText,
  StyledTextWrap,
  StyledDiv,
  StyledDivImg,
  StyledLink,
} from "./NotFound.styled";

const NotFound: FC = () => {
  return (
    <Section ptm="32px" ptt="48px" ptd="60px">
      <Container>
        <StyledDiv>
          <TitleH1>404</TitleH1>
          <StyledTextWrap>
            <StyledText>Цю сторінку не знайдено.</StyledText>
            <StyledText>
              Ми не змогли знайти сторінку, яку Ви шукаєте.
            </StyledText>
            <StyledText>Можливо, сталася помилка.</StyledText>
          </StyledTextWrap>
          <StyledLink>
            <NavLink href="/" isButton>
              Повернутися на головну
            </NavLink>
          </StyledLink>
          <StyledDivImg>
            <Image src="/images/404-img.png" alt="Digital art" fill />
          </StyledDivImg>
        </StyledDiv>
      </Container>
    </Section>
  );
};

export default NotFound;
