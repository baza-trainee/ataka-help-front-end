import styled from "@emotion/styled";
import { SectionPropsType } from "@/types";

export const Section = styled.section<SectionPropsType>`
  padding-top: ${props => (props.ptm ? props.ptm : 0)};
  padding-bottom: ${props => (props.pbm ? props.pbm : "72px")};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding-top: ${props => (props.ptt ? props.ptt : 0)};
    padding-bottom: ${props => (props.pbt ? props.pbt : "100px")};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-top: ${props => (props.ptd ? props.ptd : 0)};
    padding-bottom: ${props => (props.pbd ? props.pbd : "120px")};
  }
`;
