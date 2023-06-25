import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    column-gap: 30px;
    row-gap: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    column-gap: 24px;
    row-gap: 24px;
    margin-top: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    column-gap: 22px;
    row-gap: 22px;
    margin-top: 60px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    column-gap: 24px;
    row-gap: 24px;
  }
`;

export const ListItem = styled.li`
  width: calc((100% - 20px * 2) / 3);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: calc((100% - 30px * 2) / 3);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: calc((100% - 24px * 3) / 4);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: calc((100% - 22px * 4) / 5);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: calc((100% - 24px * 4) / 5);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 100px;
    height: 100px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 158px;
    height: 158px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 210px;
    height: 210px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 237px;
    height: 237px;
  }
`;
