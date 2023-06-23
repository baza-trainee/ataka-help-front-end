import styled from "@emotion/styled";

export const ButtonDeleteContainerStyled = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 77px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  z-index: 3;
`;
export const ButtonDeleteStyled = styled.button`
  padding: 8px 29px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue[300]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    border-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px 0px rgba(173, 176, 185, 0.56);
    transition-property: color, background-color, border-color, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: ease-out;
  }
`;
