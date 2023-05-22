import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

interface LinkProps {
  isUnderlined?: boolean;
  isFooter?: boolean;
  isButton?: boolean;
  children: string;
}

interface StyledProps {
  isUnderlined?: boolean;
  isFooter?: boolean;
  theme: Theme;
}

const linkStyles = ({
  theme,
  isUnderlined = false,
  isFooter = false,
}: StyledProps) => css`
  font-size: ${isFooter ? "22px" : "20px"};
  text-decoration: ${isUnderlined ? "underline" : "none"};
  color: ${theme.colors.white[100]};
  cursor: pointer;
`;

const buttonStyles = () => css`
  padding: 16px;
  border: 2px solid #618dfe;
  border-radius: 5px;
  color: #618dfe;
  text-transform: uppercase;
  cursor: pointer;
`;

export const StyledLink = styled.a<LinkProps>`
  ${({ isButton = false }) => (isButton ? buttonStyles : linkStyles)};
`;
