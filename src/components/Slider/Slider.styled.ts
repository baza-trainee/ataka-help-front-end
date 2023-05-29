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
  top: 50%;
  left: 54px;
  transform: translate(0, -50%);
  color: ${({ theme }) => theme.colors.white[200]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[12]};
  }
`;
