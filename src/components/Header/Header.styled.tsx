import styled from "@emotion/styled";
import { Container, Section } from "../Common";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const LogoNavWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
