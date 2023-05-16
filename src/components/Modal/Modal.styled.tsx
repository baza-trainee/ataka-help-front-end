import styled from "@emotion/styled";
import Image from "next/image";

export const Backdrop = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseIcon = styled(Image)`
  display: block;
  margin-left: auto;
`;
