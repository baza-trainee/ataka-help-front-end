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
    gap: 40px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 50px;
    margin-bottom: 43px;
  }
`;

export const IconList = styled.ul`
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 32px;

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
    gap: 14px;
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
  gap: 28px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 14px;
    align-items: flex-start;
    margin-right: 45px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 18px;
    margin-right: 117px;
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
    margin-right: 68px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 337px;
    height: 120px;
    margin-right: 219px;
  }
`;
