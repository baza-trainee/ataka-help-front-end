import styled from "@emotion/styled";

import Link from "next/link";

import { IoIosAddCircle } from "react-icons/io";

export const List = styled.ul`
  margin: 0 auto;
  width: 793px;
`;

export const Item = styled.li`
  margin-bottom: 32px;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 793px;
  height: 233px;
`;
export const Title = styled.h2`
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white[200]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Container = styled.li`
  width: 793px;
  height: 233px;
  border: 1px dashed ${({ theme }) => theme.colors.grey[700]};
`;
export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Icon = styled(IoIosAddCircle)`
  display: block;
  margin-bottom: 18px;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.blue[1200]};
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;
