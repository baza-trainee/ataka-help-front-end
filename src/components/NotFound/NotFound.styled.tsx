import styled from "@emotion/styled";
import Link from "next/link";

export const Section = styled.section`
  padding: 120px 0;
`;

export const TitleH1 = styled.h1`
  font-size: 120px;
  font-weight: 600;
  line-height: 1.1;
  color: #141944;
  margin: 0 0 92px 0;
`;

export const StyledText = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 102px;
`;

export const StyledDivWrap = styled.div`
  max-width: 505px;
`;

export const StyledDivImg = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 50%;
`;

export const StyledLink = styled(Link)`
  font-size: 21px;
  line-height: 25px;
  padding: 15px;
  display: block;
  max-width: 255px;
  border-radius: 5px;
  background-color: #aca9a9;
  text-align: center;
`;
