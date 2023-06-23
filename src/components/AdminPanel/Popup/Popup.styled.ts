import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperPopup = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
`;

export const PopupItem = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 446px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blue[400]};
  z-index: 6;
`;

export const PopupConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 20px 25px 20px;
`;

export const TitleH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  margin-bottom: 67px;
  text-align: center;
`;

export const PopupGroupBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 160px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.5;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: transparent;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    border-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px 0px rgba(173, 176, 185, 0.56);
    transition-property: color, background-color, border-color, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: ease-out;
  }
`;

export const ButtonCancel = styled(Button)`
  color: ${({ theme }) => theme.colors.white[100]};
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.blue[300]};
`;

export const ButtonRemove = styled(Button)`
  color: ${({ theme }) => theme.colors.blue[300]};
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
`;

export const ClosedIconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin-left: auto;
`;

export const ClosedIcon = styled(Image)`
  cursor: pointer;
`;
