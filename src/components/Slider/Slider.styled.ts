import styled from "@emotion/styled";

export const CarouselBox = styled.div`
  position: relative;

  height: 160px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 200px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 400px;
  }
`;

export const Title = styled.h2`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 54px;
  transform: translate(0, -50%);
  color: ${({ theme }) => theme.colors.white[200]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    left: 99px;
    font-size: ${({ theme }) => theme.fontSizes[8]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    left: 138px;
    font-size: ${({ theme }) => theme.fontSizes[12]};
  }
`;

export const PrevArrowButton = styled.button`
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translate(0, -50%);
  background-color: transparent;
  border: none;
  z-index: 1;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    left: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    left: 60px;
  }
`;

export const NextArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translate(0, -50%);
  background-color: transparent;
  border: none;
  z-index: 1;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    right: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    right: 60px;
  }
`;

export const ArrowWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 64px;
    height: 64px;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(48, 56, 126, 0.3),
    rgba(48, 56, 126, 0.3)
  );
`;
