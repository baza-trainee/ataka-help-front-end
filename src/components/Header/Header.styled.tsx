import styled from "@emotion/styled";
import { Container, Section } from "../Common";

export const HeaderWrapper = styled(Section)`
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: start;
  align-items: center;
`;
