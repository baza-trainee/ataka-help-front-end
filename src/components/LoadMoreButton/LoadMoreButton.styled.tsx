import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 68px;
    height: 68px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 19px;
  width: 184px;

  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.blue[300]};
  border: none;
  background-color: transparent;
  margin-top: 32px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 25px;
    width: 220px;

    font-size: ${({ theme }) => theme.fontSizes[6]};
    margin-top: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 60px;
  }
`;
