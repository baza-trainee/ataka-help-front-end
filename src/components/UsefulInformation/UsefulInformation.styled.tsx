import styled from "@emotion/styled";

export const Text = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  margin-bottom: 24px;
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

export const ImageContainer = styled.div`
  position: relative;

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

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
`;
