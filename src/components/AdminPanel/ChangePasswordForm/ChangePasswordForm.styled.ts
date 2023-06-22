import styled from "@emotion/styled";

export const Form = styled.form`
  margin: auto;
  padding: 46px 80px 0;
  width: 600px;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.white[100]};
  border-radius: ${({ theme }) => theme.radii.md};
`;
export const Title = styled.h2`
  margin-bottom: 64px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[7]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Label = styled.label`
  display: block;
  margin: 0 auto 33px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
export const Input = styled.input`
  display: block;
  padding: 10px;
  margin-top: 8px;
  width: 440px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;
