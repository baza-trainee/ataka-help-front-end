import styled from "@emotion/styled";

export const TitleH1 = styled.h1`
  grid-area: title;
  margin: 0 0 10px 0;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: ${({ theme }) => theme.fontSizes[9]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[10]};
    margin: 0;
    text-align: left;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[11]};
  }
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;

export const StyledDiv = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-areas:
    "title"
    "picture"
    "text"
    "button";
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-areas:
      "title picture"
      "text picture"
      "button picture";
  }
`;

export const StyledTextWrap = styled.div`
  grid-area: text;
  margin: 20px 0 36px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin: 0;
  }
`;

export const StyledDivImg = styled.div`
  grid-area: picture;
  position: relative;
  margin: 0 auto;
  height: 302px;
  width: 302px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 329px;
    height: 329px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 590px;
    height: 590px;
  }
`;

export const StyledLink = styled.div`
  grid-area: button;
`;
