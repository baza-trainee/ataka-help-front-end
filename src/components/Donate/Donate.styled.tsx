import styled from "@emotion/styled";

export const Text = styled.p`
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 40px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 0;
    width: 628px;
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const ButtonContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 628px;
    height: 407px;
    background-color: ${({ theme }) => theme.colors.blue[900]};
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 48px;
  width: 100%;
  height: 160px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 184px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 60px;
    height: 356px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    height: 400px;
  }
`;
