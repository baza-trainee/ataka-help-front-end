import styled from "@emotion/styled";

export const NavWrapper = styled.nav`
  margin-left: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-left: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-left: 98px;
  }
`;

export const List = styled.ul`
  display: none;
  justify-content: center;
  flex-direction: row;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
    gap: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 32px;
  }
`;

export const OpenLinkButton = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue[300]};
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  margin-top: 45px;
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
`;
