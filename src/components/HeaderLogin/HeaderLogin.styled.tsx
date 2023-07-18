import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;

  height: 88px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 80px;
`;

export const LogoNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;

  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue[300]};
`;
