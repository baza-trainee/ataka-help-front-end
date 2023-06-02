import styled from "@emotion/styled";

export const ListTextStyled = styled.ul`
  padding: 32px 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 48px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding: 60px 0;
  }
`;

export const ItemTextStyled = styled.li`
  margin-bottom: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 32px;
  }
`;

export const TextStyled = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }
`;
