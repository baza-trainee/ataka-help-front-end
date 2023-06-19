import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  margin: 32px auto 16px;
  width: 100%;
  height: 180px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 704px;
    height: 354px;
    margin: 48px auto 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 560px;
    height: 484px;
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 628px;
    height: 470px;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blue[500]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 560px;
    height: 484px;
    overflow: hidden;
    padding: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 628px;
    height: 470px;
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
