import styled from "@emotion/styled";

export const Iframe = styled.iframe`
  width: 90vw;
  height: 80vh;
`;

export const Link = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.white[100]};
`;
