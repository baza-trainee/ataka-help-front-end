import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ILinkProps, IStyledLinkProps } from "@/types";

const linkStyles = ({ theme, isFooter }: IStyledLinkProps) => css`
  font-size: ${isFooter ? `${theme.fontSizes[3]}` : `${theme.fontSizes[1]}`};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.white[100]};
  cursor: pointer;
  &:hover,
  &:focus {
    border-bottom: solid 2px ${theme.colors.blue[1000]};
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[1]};
    font-weight: ${isFooter
      ? `${theme.fontWeights.medium}`
      : `${theme.fontWeights.regular}`};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[4]};
  }
`;

const buttonStyles = ({ theme }: IStyledLinkProps) => css`
  display: block;
  width: 361px;
  padding: 16px;
  height: 62px;
  font-weight: ${theme.fontWeights.semibold};
  border: 2px solid ${theme.colors.blue[300]};
  border-radius: ${theme.radii.sm};
  color: ${theme.colors.blue[300]};
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: color 250ms ease-out, background-color 250ms ease-out,
    border 250ms ease-out, box-shadow 250ms ease-out;

  &:hover,
  &:focus {
    background-color: ${theme.colors.blue[600]};
    color: ${theme.colors.blue[200]};
    border-color: transparent;
    box-shadow: 0px 4px 10px rgba(173, 176, 185, 0.56);
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 410px;
  }
`;

export const StyledLink = styled.a<ILinkProps>`
  ${({ isButton = false }) => (isButton ? buttonStyles : linkStyles)};
`;
