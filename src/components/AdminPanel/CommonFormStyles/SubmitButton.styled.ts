import styled from "@emotion/styled";

export const SubmitButton = styled.button`
  display: block;
  padding: 11.5px 37.5px;
  margin-top: 49px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.blue[300]};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;
