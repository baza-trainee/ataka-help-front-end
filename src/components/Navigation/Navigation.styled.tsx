import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    gap: 20px;
    margin-left: 28px;
    margin-right: 25px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 32px;
    margin-right: 39px;
    margin-left: 105px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
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
