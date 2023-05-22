import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: ${({ theme }) => theme.breakpoints[0]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: ${({ theme }) => theme.breakpoints[1]};
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: ${({ theme }) => theme.breakpoints[2]};
    padding-left: 80px;
    padding-right: 80px;
  }
`;
