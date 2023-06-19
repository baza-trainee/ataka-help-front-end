import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { AdminButton } from "./AdminButton";
import { css } from "@emotion/react";
import { IStyles } from "@/types";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100vw;
  height: 63px;
  padding-left: 24px;
  position: fixed;
  top: 0;
  left: 240px;
  color: ${({ theme }) => theme.colors.white[100]};
  background-color: ${({ theme }) => theme.colors.blue[100]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 133%;
  font-size: ${({ theme }) => theme.fontSizes[6]};
`;

export const MainWrapper = styled.main`
  padding-top: 63px;
  padding-left: 240px;
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 200%;
`;

export const LinkStyled = styled(Link)`
  display: block;
  :not(:first-child) {
    margin-top: 16px;
  }
  color: ${({ theme }) => theme.colors.white[100]};
`;

export const CategoryImg = styled(Image)`
  margin-top: 120px;
`;

export const NavList = styled.nav`
  margin-top: 16px;
  font-size: 16px;
`;

export const AdminButtonBasic = ({ theme }: IStyles) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${theme.colors.white[100]};
  img {
    margin-right: 18px;
  }
  line-height: 178%;
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
`;

export const CantegoryButton = styled(AdminButton)`
  ${AdminButtonBasic}
  width: 177px;
  height: 48px;
  margin-top: 120px;
  color: #dcf0ff;
  background-color: #25375e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: default;
`;

export const PasswordChangeButton = styled(AdminButton)`
  ${AdminButtonBasic}
  margin-top:16px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const ExitButton = styled(AdminButton)`
  ${AdminButtonBasic}
  position: absolute;
  bottom: 100px;
  left: 0;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
