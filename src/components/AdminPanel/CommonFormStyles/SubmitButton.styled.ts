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

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    border-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px 0px rgba(173, 176, 185, 0.56);
    transition-property: color, background-color, border-color;
    transition-duration: 250ms;
    transition-timing-function: ease-out;
  }
  &[disabled] {
    color: ${({ theme }) => theme.colors.grey[400]};
    background-color: ${({ theme }) => theme.colors.grey[300]};
    border: none;
    box-shadow: none;
    pointer-events: none;
    cursor: not-allowed;
  }
`;
