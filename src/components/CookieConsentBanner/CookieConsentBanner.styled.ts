import styled from "@emotion/styled";

export const BackdropCookieBanner = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;

export const Box = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.blue[800]};
  color: ${({ theme }) => theme.colors.white[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 704px;
    padding: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 1140px;
    padding: 36px 70px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
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
    width: 861px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 1010px;
  }
`;

export const TitleStyled = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    margin-bottom: 16px;
  }
`;

export const TextStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const BtnStyled = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: background-color 250ms ease-in-out;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-left: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
    width: 60px;
    height: 60px;
    margin-left: 30px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-left: 79px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    margin-left: 50px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blue[600]};
    color: ${({ theme }) => theme.colors.blue[200]};
  }
`;
