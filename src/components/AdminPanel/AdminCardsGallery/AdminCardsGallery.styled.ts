import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const ListCardStyled = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const LinkAddCard = styled(Link)`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 265px;
  height: 542px;

  border: 0.753755px dashed #c7c7c7;
`;

export const SvgAddCard = styled(Image)`
  margin-bottom: 13px;
`;
