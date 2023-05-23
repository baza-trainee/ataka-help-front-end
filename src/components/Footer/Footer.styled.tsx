import styled from '@emotion/styled';
import Link from 'next/link';

export const StyledFooter = styled.footer`
  position: relative;
  padding-top: 52px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-left: 80px;
    padding-right: 80px;
    width: 1440px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 26px;
  justify-content: space-between;
  border-bottom: 1px solid #b2bfce;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 93px;
  margin-bottom: 44px;
`;

export const IconList = styled.ul`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  gap: 20px;
`;

export const Copyright = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white[100]};
`;

export const ContactsText = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white[100]};
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
