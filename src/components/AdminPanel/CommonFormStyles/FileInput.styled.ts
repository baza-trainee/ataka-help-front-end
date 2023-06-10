import styled from "@emotion/styled";
import { IoIosAddCircle } from "react-icons/io";

export const FileInputWrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 141px;
  margin-bottom: 24px;
  border: 1px dashed ${({ theme }) => theme.colors.blue[1100]};
  cursor: pointer;
`;
export const FileInput = styled.input`
  width: 100%;
  height: 141px;
  visibility: hidden;
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
  color: ${({ theme }) => theme.colors.blue[1100]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;
