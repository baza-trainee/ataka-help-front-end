import styled from "@emotion/styled";
import { Container, Section } from "../Common";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 0 16px;
`;

export const LogoNavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue[300]};
  cursor: pointer;
`;
