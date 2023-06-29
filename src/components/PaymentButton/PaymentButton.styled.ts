import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 2px solid ${({ theme }) => theme.colors.blue[300]};
  background-color: ${({ theme }) => theme.colors.blue[1300]};
  color: ${({ theme }) => theme.colors.blue[300]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: block;
    margin: 0 auto;
    width: 494px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 460px;
  }
`;
