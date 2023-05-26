import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

interface IMainButtonStyles {
  theme: Theme;
}

interface IOpenLink {
  isTextUnderline?: boolean;
  isCookiesButtonStyles?: boolean;
  isFooterButtonStyles?: boolean;
}

export const PagesList = styled.ul`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #000000;
`;

const FooterButtonStyles = ({ theme }: IMainButtonStyles) => css`
  @media screen and (min-width: ${theme.breakpoints[0]}) {
    font-size: ${theme.fontSizes[4]};
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[1]};
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[4]};
  }
`;

const CookiesButtonStyles = ({ theme }: IMainButtonStyles) => css`
  @media screen and (min-width: ${theme.breakpoints[0]}) {
    font-size: 13px;
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[2]};
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[3]};
  }
`;

export const OpenLink = styled.button<IOpenLink>`
  color: ${({ theme }) => theme.colors.white[100]};
  background-color: transparent;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 150%;
  font-style: normal;
  border: none;

  ${({ isFooterButtonStyles, isCookiesButtonStyles }) =>
    (isFooterButtonStyles && FooterButtonStyles) ||
    (isCookiesButtonStyles && CookiesButtonStyles)}

  text-decoration-line: ${({ isTextUnderline }) =>
    isTextUnderline ? "underline" : "none"};
`;
