import { FC } from "react";
import NavLink from "../NavLink/NavLink";
import { List, OpenLinkButton } from "./Navigation.styled";

const Navigation: FC<{
  toggleNavbar: boolean;
  setToggleNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleNavbar, setToggleNavbar }) => {
  const handleToggleNavbar = (): void => {
    setToggleNavbar((prev: boolean) => !prev);
  };

  return (
    <nav>
      <List>
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
      </List>
      <OpenLinkButton onClick={handleToggleNavbar}>
        {toggleNavbar ? <>&#10005;</> : <>&#8801;</>}
      </OpenLinkButton>
    </nav>
  );
};

export default Navigation;
