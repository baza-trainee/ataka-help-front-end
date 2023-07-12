import { IOpenLink, IStyles } from "@/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PagesList = styled.ul`
  height: 100%;
  width: 100%;
`;

const FooterButtonStyles = ({ theme }: IStyles) => css`
  @media screen and (min-width: 320px) {
    font-size: ${theme.fontSizes[3]};
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[1]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[4]};
  }
`;

const CookiesButtonStyles = ({ theme }: IStyles) => css`
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

  font-style: normal;
  border: none;

  ${({ isFooterButtonStyles, isCookiesButtonStyles }) =>
    (isFooterButtonStyles && FooterButtonStyles) ||
    (isCookiesButtonStyles && CookiesButtonStyles) ||
    FooterButtonStyles}

  border-bottom: ${({ isTextUnderline }) =>
    isTextUnderline ? "2px solid white" : "none"};

  :hover,
  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue[1000]};
  }
`;
