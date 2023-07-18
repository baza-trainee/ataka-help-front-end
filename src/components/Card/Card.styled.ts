import styled from "@emotion/styled";

export const ItemCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 600px;
  padding: 20px 20px 0px 20px;
  background-color: ${({ theme }) => theme.colors.blue[400]};
  transition: scale 250ms ease-in-out;
  box-shadow: 0px 33px 13px rgba(0, 0, 0, 0.01),
    0px 19px 11px rgba(0, 0, 0, 0.05), 0px 8px 8px rgba(0, 0, 0, 0.09),
    0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    height: 632px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 340px;
    height: 595px;
    padding: 16px 16px 0px 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 366px;
    height: 644px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 410px;
    height: 720px;
    padding: 20px 20px 0px 20px;
  }

  &:hover {
    scale: 1.03;
  }
`;

export const ImageBoxStyled = styled.div`
  position: relative;
  width: 100%;
  height: 141px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 321px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 308px;
    height: 134px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 335px;
    height: 126px;
    margin-bottom: 56px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 371px;
    height: 141px;
    margin-bottom: 60px;
  }
`;

export const BoxTextStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 307px;
  width: 100%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white[100]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 321px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 308px;
    height: 285px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 327px;
    height: 273px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 371px;
    height: 307px;
  }
`;

export const TextCardStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;

export const BtnCardStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 18px;
  width: 195px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.blue[300]};
  background-color: ${({ theme }) => theme.colors.blue[400]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out, box-shadow 250ms ease-out;
  &:hover,
  &:focus {
    border-color: transparent;
    color: ${({ theme }) => theme.colors.blue[200]};
    background-color: ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 4px 10px rgba(173, 176, 185, 0.56);
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-top: 40px;
    margin-bottom: 36px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    width: 181px;
    height: 52px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 62px;
    margin-bottom: 61px;
    width: 173px;
    height: 50px;
  }
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
    width: 195px;
    height: 56px;
    margin-top: 72px;
    margin-bottom: 64px;
  }
`;
