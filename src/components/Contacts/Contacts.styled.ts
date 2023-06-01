import styled from "@emotion/styled";

import { HiddenTitleProps } from "@/types";

export const ImageContainer = styled.div`
  position: relative;
  margin: 40px auto;
  width: 302px;
  height: 302px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 329px;
    height: 329px;
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 464px;
    height: 464px;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.black[100]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 22px;
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: 44px;
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const Contact = styled.p`
  margin-left: 16px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    align-items: center;
  }
`;

export const TabletContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    justify-content: normal;
  }
`;

export const DesktopContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-left: 244px;
  }
`;

export const HiddenTitle = styled.div<HiddenTitleProps>`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    display: ${props => props.mob};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: ${props => props.tab};
    margin-top: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: ${props => props.tab};
    margin-top: 68px;
  }
`;
