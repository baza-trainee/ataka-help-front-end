import styled from "@emotion/styled";

export const Box = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 8px;
  background-color: ${({ theme }) => theme.colors.blue[800]};
  color: ${({ theme }) => theme.colors.white[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
    height: 140px;
    padding: 25px 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 754px;
    height: 180px;
    padding: 46px 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 1280px;
    padding: 40px 80px;
  }
`;

export const BoxTextStyled = styled.div`
  width: 220px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 282px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 550px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 980px;
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
    /* width: 980px; */
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const BtnStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  color: ${({ theme }) => theme.colors.white[100]};
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: ${({ theme }) => theme.radii.sm};
  width: 40px;
  height: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 60px;
    height: 60px;
  }
`;
