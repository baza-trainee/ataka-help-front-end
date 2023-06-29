import styled from "@emotion/styled";
import { Title } from "../Common";

export const StyledTitle = styled(Title)`
  margin-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 36px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    margin-bottom: 60px;
  }
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const TextContainer = styled.div`
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.blue[500]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 560px;
    height: 571px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 628px;
    height: 510px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 184px;
  margin-bottom: 24px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 704px;
    height: 359px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 560px;
    height: 571px;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 628px;
    height: 510px;
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
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
