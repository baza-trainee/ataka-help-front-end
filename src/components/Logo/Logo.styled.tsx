import styled from "@emotion/styled";

export const LogoImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 117px;
  height: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 97px;
    height: 33px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 241px;
    height: 83px;
  }
`;
