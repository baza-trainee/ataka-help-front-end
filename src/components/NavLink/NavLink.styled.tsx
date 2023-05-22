import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ILinkProps, IStyledLinkProps } from "@/types";

const linkStyles = ({
  theme,
  isUnderlined = false,
  isFooter = false,
}: IStyledLinkProps) => css`
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

export const StyledLink = styled.a<ILinkProps>`
  ${({ isButton = false }) => (isButton ? buttonStyles : linkStyles)};
`;
