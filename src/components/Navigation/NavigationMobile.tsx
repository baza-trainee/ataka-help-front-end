import { FC } from "react";
import NavLink from "../NavLink/NavLink";
import { ExtendedList, NavbarExtendedContainer } from "./Navigation.styled";

const NavigationMobile: FC = () => {
  return (
    <NavbarExtendedContainer>
      <ExtendedList>
        <li>
          <NavLink href="/cases">Інциденти</NavLink>
        </li>
        <li>
          <NavLink href="/about">Про проєкт</NavLink>
        </li>
        <li>
          <NavLink href="/useful-information">Корисна інформація</NavLink>
        </li>
        <li>
          <NavLink href="/contacts">Контакти</NavLink>
        </li>
      </ExtendedList>
    </NavbarExtendedContainer>
  );
};

export default NavigationMobile;
