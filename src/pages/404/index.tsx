import Image from "next/image";

import { Section, TitleH1, TitleH2, StyledText, StyledDiv, StyledDivImg, StyledLink, StyledDivWrap } from "./Page404.styles";
import image from "../../assets/rectangle.png";

export default function Page404 () {
    return <Section>
      <StyledDiv>
        <StyledDivWrap>
          <TitleH1>404</TitleH1>
          <TitleH2>Ця сторінка не знайдена</TitleH2>
          <StyledText>Ми не змогли знайти сторінку, яку Ви шукаєте, або, можливо, сталася помилка</StyledText>
        </StyledDivWrap>
        <StyledDivImg>
          <Image src={image} alt="Image" width={466} height={466}/>
        </StyledDivImg>
      </StyledDiv>
      <StyledLink href="/">На головну</StyledLink>
    </Section>
}