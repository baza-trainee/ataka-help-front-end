import styled from "@emotion/styled";

export const Value = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 100%;
  height: 56px;
  border: 2px solid #618dfe;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 600;
  color: #618dfe;
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 150px;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  }
`;

export const Input = styled.input`
  padding: 12px;
  width: 100%;
  height: 56px;
  border: 2px solid #618dfe;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 600;
  color: #618dfe;
  display: block;
  margin: 0 auto 40px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #618dfe;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    max-width: 400px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    max-width: 500px;
  }
`;
export const HiddenInput = styled.input`
  display: none;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 60px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 50%;
  }
`;
export const FlexContainer = styled.div`
  padding: 40px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
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
    width: 560px;
    height: 560px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 655px;
    height: 655px;
  }
`;
export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 2px solid ${({ theme }) => theme.colors.blue[300]};
  background-color: ${({ theme }) => theme.colors.blue[1300]};
  color: ${({ theme }) => theme.colors.blue[300]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out, box-shadow 250ms ease-out;
  &:hover,
  &:focus {
    border-color: transparent;
    color: ${({ theme }) => theme.colors.blue[1300]};
    background-color: ${({ theme }) => theme.colors.blue[300]};

    outline: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    max-width: 500px;
  }
`;
