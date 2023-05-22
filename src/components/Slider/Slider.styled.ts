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
