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
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;
