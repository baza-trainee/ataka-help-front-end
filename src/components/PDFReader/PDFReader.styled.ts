import styled from "@emotion/styled";

export const Button = styled.button`
  margin-right: 12px;
  border: none;
  color: #010413;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.blue[600]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`;
export const PDFWrapper = styled.div`
  display: flex;

  justify-content: center;

  width: 100%;
`;
