import styled from "@emotion/styled";

export const MainHeader = styled.header`
  padding-top: 35px;
  padding-bottom: 49px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-left: 80px;
    padding-right: 80px;
    width: 1440px;
  }
  /* @media screen and (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: block;
  } */
`;
