import styled from "@emotion/styled";
import { Container } from "../Common";

export const Backdrop = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white[100]};
`;

export const ModalHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  min-height: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding-top: 33px;
    padding-bottom: 34px;
    align-items: normal;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-top: 48px;
    padding-bottom: 49px;
  }
  filter: drop-shadow(0px 4px 4px #0000003e);
  background: ${({ theme }) => theme.colors.blue[100]};
`;

export const ModalFooter = styled(Container)`
  min-height: auto;
  height: 90px;
  background: ${({ theme }) => theme.colors.blue[100]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    height: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 90px;
  }
`;

export const ModalBody = styled(Container)`
  min-height: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    height: calc(100% - 80px - 40px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: calc(100% - 100px - 48px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: calc(100% - 180px - 90px);
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 117px;
    height: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 97px;
    height: 33px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 241px;
    height: 83px;
  }
`;

export const CloseIconWrapper = styled.div`
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 40px;
    height: 40px;
    top: -17px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    top: 0;
  }
`;
