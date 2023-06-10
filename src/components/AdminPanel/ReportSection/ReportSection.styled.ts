import styled from "@emotion/styled";
import { LuEdit3 } from "react-icons/lu";
import { ImBin } from "react-icons/im";
import { IoIosAddCircle } from "react-icons/io";

export const Report = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  margin-left: 54px;
  color: ${({ theme }) => theme.colors.black[100]};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 2;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
`;
export const Edit = styled(LuEdit3)`
  display: block;
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Bin = styled(ImBin)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.colors.white[100]};
`;
export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 24px;
  background-color: ${({ theme }) => theme.colors.red[200]};
  border-radius: 50%;
  border-color: transparent;
`;
export const AddReport = styled.div`
  position: relative;
  width: 100%;
  height: 141px;
  border: 1px dashed ${({ theme }) => theme.colors.grey[700]};
  cursor: pointer;
`;
export const StyledIcon = styled(IoIosAddCircle)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.blue[1200]};
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;
