import styled from "@emotion/styled";

export const StyledIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.white[100]};
  :hover,
  :focus {
    fill: ${({ theme }) => theme.colors.blue[300]};
  }
`;
