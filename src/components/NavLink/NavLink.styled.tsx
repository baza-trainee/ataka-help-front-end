import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ILinkProps, IStyledLinkProps } from "@/types";

const linkStyles = ({ theme }: IStyledLinkProps) => css`
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.white[100]};
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[1]};
    font-weight: ${theme.fontWeights.regular};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[4]};
  }
`;

const buttonStyles = ({ theme }: IStyledLinkProps) => css`
  display: block;
  max-width: 410px;
  padding: 16px;
  border: 2px solid ${theme.colors.blue[300]};
  border-radius: 5px;
  color: ${theme.colors.blue[300]};
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`;

export const StyledLink = styled.a<ILinkProps>`
  ${({ isButton = false }) => (isButton ? buttonStyles : linkStyles)};
`;
