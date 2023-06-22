import styled from "@emotion/styled";

export const ParentContainer = styled.div`
  width: 600px;
  height: 600px;
  margin: 120px auto;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 88px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const LogoNavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue[300]};
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding-top: ;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 440px;
  height: 60px;
  padding: 8px;
  margin-top: 9px;
  border: 1px solid ${({ theme }) => theme.colors.black[300]};
  border-radius: 4px;
  background-color: #fff !important;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  align-self: center;
  margin-top: 54px;
  margin-bottom: 18px;
  padding: 16px 40px;
  height: 60px;
  color: ${({ theme }) => theme.colors.blue[300]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-variant: small-caps;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: none;
  cursor: pointer;
  width: 254px;
`;

export const MessageWrapper = styled.div``;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[100]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
`;
