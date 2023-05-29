import { FC } from "react";
import Image from "next/image";

import { Container, Section } from "../Common";
import errorImg from "../../../public/images/404-img.png";
import NavLink from "../NavLink/NavLink";
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
    <Section ptm="32px" ptt="60px" ptd="60px">
      <Container>
        <StyledDiv>
          <TitleH1>404</TitleH1>
          <StyledTextWrap>
            <StyledText>Ми не знайшли сторінку, яку Ви шукаєте.</StyledText>
            <StyledText>Можливо, сталася помилка.</StyledText>
          </StyledTextWrap>
          <StyledLink>
            <NavLink href="/" isButton>
              Повернутися на головну
            </NavLink>
          </StyledLink>
          <StyledDivImg>
            <Image src={errorImg} alt="Digital art" fill />
          </StyledDivImg>
        </StyledDiv>
      </Container>
    </Section>
  );
};

export default NotFound;
