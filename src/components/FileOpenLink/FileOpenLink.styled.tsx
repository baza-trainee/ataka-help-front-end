import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

interface IMainButtonStyles {
  theme: Theme;
}

interface IOpenLink {
  isTextUnderline: boolean | undefined;
}

export const PagesList = styled.ul`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #000000;
`;

const MainButtonStyles = ({ theme }: IMainButtonStyles) => css`
  height: 30px;
  font-size: ${theme.fontSizes[4]};
  color: ${theme.colors.white[100]};
  background-color: transparent;
  font-weight: ${theme.fontWeights.medium};
  border: none;
`;

export const OpenLink = styled.button<IOpenLink>`
  ${MainButtonStyles}
  text-decoration-line: ${({ isTextUnderline }) =>
    isTextUnderline ? "underline" : "none"};
`;
