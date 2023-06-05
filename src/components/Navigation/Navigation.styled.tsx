import { IStyles } from "@/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const isActive = ({ theme }: IStyles) => css`
  .isActive a,
  span.isActive {
    color: ${theme.colors.blue[1000]};
    border-bottom: solid 2px ${theme.colors.blue[1000]};
  }
`;

export const NavWrapper = styled.nav`
  display: none;
  margin-left: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: block;
    margin-left: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-left: 98px;
  }

  ${isActive}
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 32px;
  }
`;

export const NavbarExtendedContainer = styled.nav`
  margin-top: 36px;
  height: auto;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`;

export const ExtendedList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;

  a {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  ${isActive}
`;

export const SubMenuTab = styled(ExtendedList)`
  position: absolute;
  bottom: 0;
  transform: translateY(90%);
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.blue[100]};

  li {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.grey[500]};
  }
`;

export const SubMenuMob = styled(ExtendedList)`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  margin-top: 16px;
  li {
    padding-left: 10px;
  }
  li::before {
    content: "·";
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.white[100]};
  }

  a {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
`;

const SubMenuTitleCommon = ({ theme }: IStyles) => css`
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.white[100]};
  cursor: pointer;

  :hover,
  :focus {
    border-bottom: solid 2px ${theme.colors.blue[1000]};
  }
`;

export const SubMenuTitleTab = styled.span`
  ${SubMenuTitleCommon}
  font-size: ${({ theme }) => theme.fontSizes[1]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }

  ${isActive}
`;

export const SubMenuTitleMobile = styled.span`
  ${SubMenuTitleCommon}

  font-size: ${({ theme }) => theme.fontSizes[1]};
`;
