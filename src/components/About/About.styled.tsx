import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  margin: 32px auto 16px;
  min-width: 300px;
  height: 180px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 754px;
    height: 384px;
    margin: 48px auto 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 628px;
    height: 470px;
    margin: 0;
  }
`;

export const Text = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blue[500]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 628px;
    height: 470px;
    overflow: hidden;
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
  }
`;
