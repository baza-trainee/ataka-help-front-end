import styled from "@emotion/styled";

export const Box = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 65px;
  padding: 38px 80px;
  background-color: #656fb4;
  color: ${p => p.theme.colors.white[100]};
  & h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 4px;
  }
  & p {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    & a {
      text-decoration: underline;
    }
  }
`;

export const BtnStyled = styled.button`
  width: 64px;
  height: 64px;
  background-color: ${p => p.theme.colors.blue[100]};
  color: ${p => p.theme.colors.white[100]};
  border: none;
`;
