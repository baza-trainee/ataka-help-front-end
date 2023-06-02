import { FC } from "react";
import NavLink from "../NavLink/NavLink";
import { List, NavWrapper, OpenLinkButton } from "./Navigation.styled";
import NavigationMobile from "./NavigationMobile";
import Image from "next/image";

import burgerIcon from "/public/icons/burger-menu.svg";
import { useRouter } from "next/router";

const data = [
  {
    id: 1,
    title: "Інциденти",
    path: "cases",
  },
  {
    id: 2,
    title: "Про проєкт",
    path: "about",
  },
  {
    id: 3,
    title: "Корисна інформація",
    path: "useful-information",
  },
  {
    id: 4,
    title: "Контакти",
    path: "contacts",
  },
];

const Navigation: FC<{
  toggleNavbar: boolean;
  setToggleNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleNavbar, setToggleNavbar }) => {
  const router = useRouter();

  const handleToggleNavbar = (): void => {
    setToggleNavbar((prev: boolean) => !prev);
  };

  const isActiveLink = (href: string) =>
    router.pathname === href ? "isActive" : "";

  return (
    <>
      <NavWrapper>
        <List>
          <li className={isActiveLink("/cases")}>
            <NavLink href={"/cases"}>Інциденти</NavLink>
          </li>
          <li className={isActiveLink("/about")}>
            <NavLink href={"/about"}>Про проєкт</NavLink>
          </li>
          <li className={isActiveLink("/useful-information")}>
            <NavLink href={"/useful-information"}>Корисна інформація</NavLink>
          </li>
          <li className={isActiveLink("/contacts")}>
            <NavLink href={"/contacts"}>Контакти</NavLink>
          </li>
        </List>
      </NavWrapper>
      <OpenLinkButton onClick={handleToggleNavbar}>
        {toggleNavbar ? (
          <>&#10005;</>
        ) : (
          <Image src={burgerIcon} alt="burgerIcon" />
        )}
      </OpenLinkButton>
    </>
  );
};

export default Navigation;
