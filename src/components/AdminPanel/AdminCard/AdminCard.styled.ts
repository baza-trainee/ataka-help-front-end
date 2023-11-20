import styled from "@emotion/styled";

export const ItemCardStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 265px;
  height: 542px;

  background-color: ${({ theme }) => theme.colors.blue[400]};

  box-shadow: 0px 33px 13px rgba(0, 0, 0, 0.01),
    0px 19px 11px rgba(0, 0, 0, 0.06), 0px 8px 8px rgba(0, 0, 0, 0.09),
    0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
`;

export const CardContainer = styled.div`
  padding: 13px 13px 0px 13px;
`;
export const ImageBoxStyled = styled.div`
  position: relative;
  width: 240px;
  height: 91px;
  margin-bottom: 39px;
`;

export const BoxTextStyled = styled.div`
  display: flex;
  margin-bottom: 46px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  height: 199px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white[100]};
`;

export const TextCardStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const BtnCardStyled = styled.button`
  display: block;
  padding: 8px 28px;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin: 0 auto 41px auto;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.blue[300]};
  background-color: ${({ theme }) => theme.colors.blue[400]};
  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out, box-shadow 250ms ease-out;
  &:hover,
  &:focus {
    border-color: transparent;
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px rgba(173, 176, 185, 0.56);
  }
`;
