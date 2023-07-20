import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 60px;
  border-radius: 50%;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
    height: 361px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 604px;
    height: 604px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 560px;
    height: 560px;
    margin-bottom: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 655px;
    height: 655px;
  }
`;
export const PaymentSection = styled.section`
  margin-top: 32px;
  margin-bottom: 72px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 48px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 110px;
    margin-bottom: 110px;
  }
`;
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 auto;

  padding-right: 10px;
  padding-left: 10px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 393px;
    padding-right: 16px;
    padding-left: 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 768px;
    padding-right: 82px;
    padding-left: 82px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 1280px;
    height: 560px;
    padding-right: 70px;
    padding-left: 70px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 1440px;
    height: 655px;
    padding-right: 100px;
    padding-left: 80px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[7]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 448px;
    font-size: ${({ theme }) => theme.fontSizes[8]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[9]};
  }
`;
