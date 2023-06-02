import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  row-gap: 20px;
  column-gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    column-gap: 30px;
    row-gap: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    column-gap: 24px;
  }
`;

export const ListItem = styled.li`
  width: calc((100% - 20px * 2) / 3);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: calc((100% - 31px * 2) / 3);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: calc((100% - 24px * 3) / 4);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: calc((100% - 24px * 4) / 5);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 170px;
    height: 170px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 237px;
    height: 237px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 56px;
  }
`;
