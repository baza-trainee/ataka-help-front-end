import styled from "@emotion/styled";

export const TextInput = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 20px;
  margin-bottom: 26px;
  border: 1px solid ${({ theme }) => theme.colors.blue[1100]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue[1100]};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.5;
  }
  &:focus {
    outline: none;
  }
`;
