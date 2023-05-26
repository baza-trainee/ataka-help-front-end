import styled from "@emotion/styled";

export const Box = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 65px;
  background-color: #656fb4;
  padding: 20px 16px;
  color: ${({ theme }) => theme.colors.white[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 32px 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding: 38px 80px;
  }
`;

export const TitleStyled = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    margin-bottom: 12px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    margin-bottom: 15px;
  }
`;

export const TextStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[1]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const BtnStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  color: ${({ theme }) => theme.colors.white[100]};
  border: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    min-width: 40px;
    min-height: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 60px;
    min-height: 60px;
  }
`;
