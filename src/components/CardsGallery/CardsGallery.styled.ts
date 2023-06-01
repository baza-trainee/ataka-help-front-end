import styled from "@emotion/styled";

export const ListCardStyled = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  flex-wrap: wrap;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    gap: 32px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 48px 24px;
    margin-bottom: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 60px 24px;
    margin-bottom: 60px;
  }
`;
export const TitleListStyled = styled.h2`
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 60px;
  }
`;
