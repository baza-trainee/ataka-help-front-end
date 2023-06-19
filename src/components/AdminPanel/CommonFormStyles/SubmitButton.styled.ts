import styled from "@emotion/styled";

export const SubmitButton = styled.button`
  display: block;
  padding: 11.5px 37.5px;
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;

  color: ${({ theme }) => theme.colors.blue[300]};
  background-color: transparent;

  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;
