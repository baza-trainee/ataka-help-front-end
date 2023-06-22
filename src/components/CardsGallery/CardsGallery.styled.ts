import styled from "@emotion/styled";
import { Title } from "../Common";

export const ListCardStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    gap: 32px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 48px 22px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 40px 20px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    gap: 60px 24px;
    margin-bottom: 60px;
  }
`;

export const TitleListStyled = styled(Title)`
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 60px;
  }
`;
