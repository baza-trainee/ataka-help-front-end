import { FC } from "react";
import {
  Aside,
  CategoryImg,
  LinkStyled,
  NavList,
  PasswordChangeButton,
  ExitButton,
  CantegoryButton,
} from "./AdminLatout.styled";
import Image from "next/image";
import logo from "public/images/logo.png";
import logout from "public/icons/icon-logout.svg";
import settings from "public/icons/icon-setting.svg";
import category from "public/icons/icon-checklist.svg";

const SideBar: FC = () => {
  return (
    <Aside>
      <Image src={logo} alt="logo" width={177} />
      <CantegoryButton imgSrc={category} imgAlt="logo" title="Категорії" />
      <NavList>
        <LinkStyled href={"/admin/cards"}>Картки</LinkStyled>
        <LinkStyled href={"/admin/partners"}>Лого партнерів</LinkStyled>
        <LinkStyled href={"/admin/slider"}>Слайдер</LinkStyled>
        <LinkStyled href={"/admin/report"}>Звітність</LinkStyled>
        <LinkStyled href={"/admin/contacts"}>Контакти</LinkStyled>
      </NavList>
      <PasswordChangeButton
        onClick={() => console.log("should put here open modal function")}
        imgSrc={settings}
        imgAlt="settings-icon"
        title="Змінити пароль"
      />
      <ExitButton
        onClick={() => console.log("should put here open modal function")}
        imgSrc={logout}
        imgAlt="logout-icon"
        title="Вихід"
      />
    </Aside>
  );
};

export default SideBar;
