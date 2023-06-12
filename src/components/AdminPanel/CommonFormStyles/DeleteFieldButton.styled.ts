import styled from "@emotion/styled";

import { ImBin } from "react-icons/im";

export const DeleteFieldButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.red[200]};
  border-radius: 50%;
  border-color: transparent;
`;

export const StyledBin = styled(ImBin)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.colors.white[100]};
`;
