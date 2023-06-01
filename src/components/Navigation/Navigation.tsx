import { FC } from "react";
import NavLink from "../NavLink/NavLink";
import { List, NavWrapper, OpenLinkButton } from "./Navigation.styled";
import NavigationMobile from "./NavigationMobile";

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
  const handleToggleNavbar = (): void => {
    setToggleNavbar((prev: boolean) => !prev);
  };

  return (
    <>
      <NavWrapper>
        <List>
          {data.map(link => {
            return (
              <li key={link.id}>
                <NavLink href={`/${link.path}`}>{link.title}</NavLink>
              </li>
            );
          })}
        </List>
      </NavWrapper>
      <OpenLinkButton onClick={handleToggleNavbar}>
        {toggleNavbar ? <>&#10005;</> : <>&#8801;</>}
      </OpenLinkButton>
    </>
  );
};

export default Navigation;
