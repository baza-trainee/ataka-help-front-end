import styled from "@emotion/styled";

import { Container } from "../Common";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.white[100]};
  z-index: 3;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 40px 16px 20px;

  align-items: center;
  filter: drop-shadow(0px 4px 4px #0000003e);
  background: ${({ theme }) => theme.colors.blue[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 100px;
    padding: 30px 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 140px;
    padding: 44px 70px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    height: 180px;
    padding: 48px 80px;
  }
`;

export const ModalFooter = styled.div`
  margin-top: auto;
  height: 100px;

  width: 100%;
  background: ${({ theme }) => theme.colors.blue[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 90px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100% - 80px - 100px);
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: calc(100% - 100px - 48px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: calc(100% - 180px - 90px);
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 117px;
  height: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 89px;
    height: 33px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 169px;
    height: 52px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 241px;
    height: 83px;
  }
`;

export const CloseIconWrapper = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    top: 0;
  }
`;
