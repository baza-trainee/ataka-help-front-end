import styled from "@emotion/styled";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  margin-bottom: 42px;
  background-color: ${({ theme }) => theme.colors.blue[500]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 28px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 0;
    padding: 40px;
    width: 560px;
    height: 433px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 627px;
    height: 418px;
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
    width: 560px;
    height: 433px;
    background-color: ${({ theme }) => theme.colors.blue[500]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 627px;
    height: 418px;
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


  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    height: 400px;
  }
`;
