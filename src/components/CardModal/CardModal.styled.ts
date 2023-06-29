import styled from "@emotion/styled";

export const ListContainer = styled.div`
  margin-top: 32px;
  width: 361px;
`;

export const ListTextStyled = styled.ol`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 48px 0;
    font-size: ${({ theme }) => theme.fontSizes[7]};
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
  margin-left: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-left: 24px;
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }
`;
