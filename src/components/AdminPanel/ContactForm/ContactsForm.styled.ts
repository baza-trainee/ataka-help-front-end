import styled from "@emotion/styled";
import { LuEdit3 } from "react-icons/lu";
import { ImBin } from "react-icons/im";

export const StyledLabel = styled.label`
  position: relative;
`;
export const SubTitle = styled.p`
  margin-bottom: 20px;
  margin-top: 42px;
  margin-left: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const Input = styled.input`
  width: 100%;
  height: 57px;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[600]};
  &:focus {
    outline: none;
  }
`;
export const StyledError = styled.p`
  color: ${({ theme }) => theme.colors.red[100]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`;
export const StyledEdit = styled(LuEdit3)`
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translate(0, -50%);
  cursor: pointer;
`;
