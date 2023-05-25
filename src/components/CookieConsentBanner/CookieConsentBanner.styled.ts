import { theme } from "@/theme";
import styled from "@emotion/styled";

export const Box = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 65px;
  background-color: #656fb4;
  padding: 20px 16px;
  color: ${p => p.theme.colors.white[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 32px 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding: 38px 80px;
  }
  & h3 {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    margin-bottom: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      margin-bottom: 12px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizes[4]};
      margin-bottom: 15px;
    }
  }
  & p {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 19.5px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: 24x;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      line-height: 27px;
    }
    & a {
      text-decoration: underline;
    }
  }
`;

export const BtnStyled = styled.button`
  background-color: ${p => p.theme.colors.blue[100]};
  color: ${p => p.theme.colors.white[100]};
  border: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    min-width: 40px;
    min-height: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 60px;
    min-height: 60px;
  }
`;
