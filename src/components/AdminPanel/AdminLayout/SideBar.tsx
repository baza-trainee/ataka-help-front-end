import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Aside,
  LinkStyled,
  NavList,
  ExitButton,
  CantegoryButton,
  Icon,
} from "./AdminLatout.styled";

import category from "public/icons/icon-checklist.svg";

const SideBar: FC = () => {
  const router = useRouter();
  return (
    <Aside>
      <Image src={"/images/logo.png"} alt="logo" width={177} height={68} />
      <CantegoryButton imgSrc={category} imgAlt="logo" title="Категорії" />
      <NavList>
        <LinkStyled
          href={"/admin/cards"}
          color={router.pathname === "/admin/cards" ? "#618DFE" : "white"}
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

      <LinkStyled
        href={"/admin/change-password"}
        color={
          router.pathname === "/admin/change-password" ? "#618DFE" : "white"
        }
      >
        <Image
          src={"/icons/icon-setting.svg"}
          width={20}
          height={20}
          alt="settings image"
          style={{ marginRight: "18px" }}
        />
        Змінити пароль
      </LinkStyled>
      <ExitButton onClick={() => console.log("exit")}>
        <Icon /> Вихід
      </ExitButton>
    </Aside>
  );
};

export default SideBar;
