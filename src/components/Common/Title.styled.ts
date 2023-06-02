import styled from "@emotion/styled";
import { TitlePropsType } from "@/types";

export const Title = styled.h2<TitlePropsType>`
  color: ${({ theme }) => theme.colors.blue[100]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: ${props => props.textAlignM};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    text-align: ${props => props.textAlignT};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    text-align: ${props => props.textAlignD};
  }
`;
