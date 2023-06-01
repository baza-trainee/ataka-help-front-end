import styled from "@emotion/styled";
import Image from "next/image";

export const ItemCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 600px;
  padding: 20px 28px 0px 28px;
  background-color: ${({ theme }) => theme.colors.blue[400]};
  box-shadow: 0px 33px 13px rgba(0, 0, 0, 0.01),
    0px 19px 11px rgba(0, 0, 0, 0.05), 0px 8px 8px rgba(0, 0, 0, 0.09),
    0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    height: 632px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: calc((100% - 48px) / 2);
    height: 639px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: calc((100% - 48px) / 3);
    height: 712px;
  }
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 36px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 60px;
  }
`;

export const BoxTextStyled = styled.div`
  display: flex;
  align-items: center;

  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white[100]};
`;

export const TextCardStyled = styled.p`
  text-align: center;
`;

export const BtnCardStyled = styled.button`
  padding: 18px 20px;
  margin-top: 20px;
  margin-bottom: 18px;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.blue[300]};
  background-color: ${({ theme }) => theme.colors.blue[400]};
  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out, box-shadow 250ms ease-out;
  &:hover,
  &focus {
    border-color: transparent;
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px rgba(173, 176, 185, 0.56);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: 16px 40px;
    margin-top: 40px;
    margin-bottom: 36px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-bottom: 39px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 72px;
    margin-bottom: 64px;
  }
`;
