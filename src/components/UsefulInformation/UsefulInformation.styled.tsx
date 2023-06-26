import styled from "@emotion/styled";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
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
    width: 560px;
    height: 560px;    
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 628px;
    height: 470px;   
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 361px;    
    height: 184px;  
    margin-bottom: 24px;   
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 704px;
    height: 383px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 560px;
    height: 560px;    
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 628px;
    height: 470px;   
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  :nth-of-type(odd) {
    flex-direction: row-reverse;
  }
`;
