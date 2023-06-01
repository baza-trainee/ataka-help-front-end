import styled from "@emotion/styled";

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

export const NavbarExtendedContainer = styled.nav`
  margin-top: 36px;
  height: auto;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`;

export const ExtendedList = styled.ul`
  gap: 16px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  li > a {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;
