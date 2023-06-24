import styled from "@emotion/styled";

import { BsFillCaretRightFill } from "react-icons/bs";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    color: ${({ theme }) => theme.colors.blue[1100]};
  }
  :last-child {
    color: ${({ theme }) => theme.colors.blue[300]};
  }
`;
export const Text = styled.p`
  margin-right: 18px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.77;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Icon = styled(BsFillCaretRightFill)`
  margin-right: 18px;

  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.blue[1100]};
`;

export const BackButton = styled.button`
  padding: 8px 22px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue[300]};
  font-size: ${({ theme }) => theme.fontSizes[5]};

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    border-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px 0px rgba(173, 176, 185, 0.56);
  }
`;
