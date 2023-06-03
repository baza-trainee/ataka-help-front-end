import { FC, useState } from "react";
import { useRouter } from "next/router";
import NavLink from "../NavLink/NavLink";
import {
  ExtendedList,
  NavbarExtendedContainer,
  SubMenu,
  SubMenuTitle,
} from "./Navigation.styled";

const NavigationMobile: FC = () => {
  const router = useRouter();
  const [isUsefulInfoShow, setIsUsefulInfoShow] = useState(false);

  const isActiveLink = (href: string) =>
    router.pathname === href ? "isActive" : "";

  const subMenuTitleClickHandle = () => setIsUsefulInfoShow(!isUsefulInfoShow);
  return (
    <NavbarExtendedContainer>
      <ExtendedList>
        <li className={isActiveLink("/cases")}>
          <NavLink href="/cases">Інциденти</NavLink>
        </li>
        <li className={isActiveLink("/about")}>
          <NavLink href="/about">Про проєкт</NavLink>
        </li>
        <li>
          <SubMenuTitle onClick={subMenuTitleClickHandle}>
            Корисна інформація
          </SubMenuTitle>
          {isUsefulInfoShow && (
            <SubMenu>
              <li className={isActiveLink("/useful-information/1")}>
                <NavLink href="/useful-information/1">Як обрати пароль</NavLink>
              </li>
              <li className={isActiveLink("/useful-information/2")}>
                <NavLink href="/useful-information/2">
                  Як замінити пароль до акаунту в соціальній мережі
                </NavLink>
              </li>
              <li className={isActiveLink("/useful-information/3")}>
                <NavLink href="/useful-information/3">
                  Що таке двохфакторна аутентифікація
                </NavLink>
              </li>
              <li className={isActiveLink("/useful-information/4")}>
                <NavLink href="/useful-information/4">
                  Як обрати і встановити антивірус
                </NavLink>
              </li>
            </SubMenu>
          )}
        </li>

        <li className={isActiveLink("/contacts")}>
          <NavLink href="/contacts">Контакти</NavLink>
        </li>
      </ExtendedList>
    </NavbarExtendedContainer>
  );
};

export default NavigationMobile;
