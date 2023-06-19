import styled from "@emotion/styled";

export const ItemPartnerCardStyled = styled.li`
  height: 209px;
  width: 209px;
`;

export const AdminCardImageBoxStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PartnerButtonDeleteContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 79px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;
export const PartnerButtonDeleteStyled = styled.button`
  padding: 8px 26px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue[300]};
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;
