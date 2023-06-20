import styled from "@emotion/styled";
import Link from "next/link";

export const StyledFooter = styled.footer`
  position: relative;
  padding-top: 32px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.blue[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding-top: 48px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-top: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding-top: 52px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white[100]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
    margin-bottom: 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-bottom: 32px;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 44px;
    margin-bottom: 24px;
    margin-left: auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 61px;
    margin-bottom: 40px;
    margin-left: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    gap: 50px;
    margin-bottom: 44px;
  }
`;

export const IconList = styled.ul`
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 33px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    align-self: flex-end;
  }
`;

export const Copyright = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.white[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const ContactsText = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.white[100]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 12px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 12px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  pointer-events: none;
  cursor: not-allowed;
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 14px;
    align-items: flex-start;
    margin-right: 34px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 18px;
    margin-right: auto;
  }
`;

export const ListItem = styled.li`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 21px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 30px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 173px;
  height: 64px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 191px;
    margin-right: 29px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 270px;
    height: 104px;
    margin-right: 213px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 337px;
    height: 114px;
    margin-right: 219px;
  }
`;
