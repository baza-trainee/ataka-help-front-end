import { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import NavLink from "../NavLink";
import {
  List,
  NavWrapper,
  SubMenuTab,
  SubMenuTitleTab,
} from "./Navigation.styled";

const Navigation: FC = () => {
  const router = useRouter();
  const [isUsefulInfoShow, setIsUsefulInfoShow] = useState(false);
  const subMenuTitleTabRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const pressEscCloseSubMenuHandler = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setIsUsefulInfoShow(false);
      }
    };
    const subMenuAsideClickHandler = (event: MouseEvent) => {
      if (event.target !== subMenuTitleTabRef.current) {
        setIsUsefulInfoShow(false);
      }
    };

    document.addEventListener("click", subMenuAsideClickHandler);
    document.addEventListener("keydown", pressEscCloseSubMenuHandler);

    return () => {
      document.removeEventListener("click", subMenuAsideClickHandler);
      document.removeEventListener("keydown", pressEscCloseSubMenuHandler);
    };
  }, []);

  const subMenuTitleClickHandle = () => setIsUsefulInfoShow(!isUsefulInfoShow);

  const isActiveLink = (href: string) =>
    router.pathname === href ? "isActive" : "";

  const isActiveLinkTitle = (href: string) =>
    router.pathname.includes(href) ? "isActive" : "";

  return (
    <NavWrapper>
      <List>
        <li className={isActiveLink("/")}>
          <NavLink href={"/"}>Інциденти</NavLink>
        </li>
        <li className={isActiveLink("/about")}>
          <NavLink href={"/about"}>Про проєкт</NavLink>
        </li>
        <li>
          <SubMenuTitleTab
            ref={subMenuTitleTabRef}
            onClick={subMenuTitleClickHandle}
            className={isActiveLinkTitle("/useful-information")}
          >
            Корисна інформація
          </SubMenuTitleTab>
          {isUsefulInfoShow && (
            <SubMenuTab>
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
                  Що таке двофакторна аутентифікація
                </NavLink>
              </li>
              <li className={isActiveLink("/useful-information/4")}>
                <NavLink href="/useful-information/4">
                  Як обрати і встановити антивірус
                </NavLink>
              </li>
            </SubMenuTab>
          )}
        </li>
        <li className={isActiveLink("/contacts")}>
          <NavLink href={"/contacts"}>Контакти</NavLink>
        </li>
      </List>
    </NavWrapper>
  );
};

export default Navigation;
