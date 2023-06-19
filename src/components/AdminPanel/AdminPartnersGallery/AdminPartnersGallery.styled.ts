import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const AdminListPartnersStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const LinkAddPartner = styled(Link)`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 209px;
  height: 209px;

  border: 0.753755px dashed #c7c7c7;
`;

export const SvgAddPartner = styled(Image)`
  margin-bottom: 8px;
`;
