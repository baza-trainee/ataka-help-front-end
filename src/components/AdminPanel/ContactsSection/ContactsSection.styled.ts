import styled from "@emotion/styled";
import Link from "next/link";

export const Subtitle = styled.p`
  margin-bottom: 20px;
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const EmailTitle = styled(Subtitle)`
  margin-top: 42px;
`;

export const Contact = styled.p`
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[600]};
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 56px;

  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;

  color: ${({ theme }) => theme.colors.blue[300]};
  background-color: transparent;

  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    border-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px 0px rgba(173, 176, 185, 0.56);
    transition-property: color, background-color, border-color;
    transition-duration: 250ms;
    transition-timing-function: ease-out;
  }
`;
