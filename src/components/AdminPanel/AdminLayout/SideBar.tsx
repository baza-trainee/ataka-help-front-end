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
import { useRouter } from "next/router";

const SideBar: FC = () => {
  const router = useRouter();
  return (
    <Aside>
      <Image src={logo} alt="logo" width={177} />
      <CantegoryButton imgSrc={category} imgAlt="logo" title="Категорії" />
      <NavList>
        <LinkStyled
          href={"/admin/cards"}
          color={
            router.pathname === "/admin/cards" || "/admin/cards/form"
              ? "#618DFE"
              : "white"
          }
        >
          Картки
        </LinkStyled>
        <LinkStyled
          href={"/admin/partners"}
          color={router.pathname === "/admin/partners" ? "#618DFE" : "white"}
        >
          Лого партнерів
        </LinkStyled>
        <LinkStyled
          href={"/admin/slider"}
          color={router.pathname === "/admin/slider" ? "#618DFE" : "white"}
        >
          Слайдер
        </LinkStyled>
        <LinkStyled
          href={"/admin/report"}
          color={router.pathname === "/admin/report" ? "#618DFE" : "white"}
        >
          Звітність
        </LinkStyled>
        <LinkStyled
          href={"/admin/contacts"}
          color={router.pathname === "/admin/contacts" ? "#618DFE" : "white"}
        >
          Контакти
        </LinkStyled>
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
