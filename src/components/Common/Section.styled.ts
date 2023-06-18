import styled from "@emotion/styled";
import { SectionPropsType } from "@/types";

export const Section = styled.section<SectionPropsType>`
  padding-top: ${props => (props.ptm ? props.ptm : 0)};
  padding-bottom: ${props => (props.pbm ? props.pbm : "72px")};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding-top: ${props => props.ptt};
    padding-bottom: ${props => (props.pbt ? props.pbt : "100px")};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-top: ${props => props.ptd};
    padding-bottom: ${props => (props.pbd ? props.pbd : "110px")};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding-top: ${props => props.ptdd};
    padding-bottom: ${props => (props.pbdd ? props.pbdd : "120px")};
  }
`;
