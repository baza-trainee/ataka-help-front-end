import styled from "@emotion/styled";

export const ListTextStyled = styled.ul`
  margin-top: 32px;
  margin-bottom: 32px;
  padding-right: 16px;
  padding-left: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 48px;
    margin-bottom: 48px;
    padding-right: 24px;
    padding-left: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 60px;
    margin-bottom: 60px;
    padding-right: 80px;
    padding-left: 80px;
  }
`;

export const ItemTextStyled = styled.li`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    margin-bottom: 32px;
  }
`;

export const TextStyled = styled.p`
  margin-left: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-left: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-left: 80px;
  }
`;
