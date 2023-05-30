import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 58px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 71px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px 23px 10px 10px;
  height: 48px;
  width: 90%;
  color: ${({ theme }) => theme.colors.black[100]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: ${({ theme }) => theme.radii.sm};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 365px;
    height: 60px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 410px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }

  &:focus,
  &:active {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.black[300]};
  }

  &.invalid {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.red[100]};
  }
`;

export const Comment = styled.textarea`
  padding: 10px 23px 10px 10px;
  height: 148px;
  width: 90%;
  resize: none;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: ${({ theme }) => theme.radii.sm};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 361px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 754px;
    height: 300px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 846px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
  &:focus,
  &:active {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.black[300]};
  }

  &.invalid {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.red[100]};
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 32px;
  }
`;

export const Button = styled.button`
  align-self: center;
  margin-top: 36px;
  padding: 16px 40px;
  height: 60px;
  width: 90%;
  color: ${({ theme }) => theme.colors.blue[300]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-variant: small-caps;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: none;
  cursor: pointer;
  transition: color 250ms ease-out, background-color 250ms ease-out,
    border 250ms ease-out, box-shadow 250ms ease-out;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-top: 28px;
    width: 361px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 54px;
    width: 300px;
  }

  &[disabled] {
    color: ${({ theme }) => theme.colors.grey[400]};
    background-color: ${({ theme }) => theme.colors.grey[300]};
    border: none;
    box-shadow: none;
    pointer-events: none;
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    border: none;
    box-shadow: 0px 4px 10px rgba(173, 176, 185, 0.56);
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[100]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-variant: small-caps;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
`;

export const MessageWrapper = styled.div`
  position: absolute;
  bottom: -22px;
`;

export const CaptchaWrapper = styled.div`
  margin-top: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 32px;
  }
`;
