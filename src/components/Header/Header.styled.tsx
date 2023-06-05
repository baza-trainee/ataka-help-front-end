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

export const OpenLinkButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue[300]};
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`;
