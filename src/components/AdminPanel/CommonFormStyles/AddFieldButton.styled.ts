import styled from "@emotion/styled";

import { IoIosAddCircle } from "react-icons/io";

export const AddFieldButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 29.5px;
  margin-left: auto;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.blue[1100]};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.colors.blue[1100]};
`;

export const StyledPlusIcon = styled(IoIosAddCircle)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.blue[1200]};
`;
