import styled from "@emotion/styled";

export const ErrorMessage = styled.p`
  margin-top: -20px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.red[100]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`;
