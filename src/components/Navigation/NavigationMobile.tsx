import { FC } from "react";
import NavLink from "../NavLink/NavLink";
import { ExtendedList, NavbarExtendedContainer } from "./Navigation.styled";

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

const NavigationMobile: FC = () => {
  return (
    <NavbarExtendedContainer>
      <ExtendedList>
        {data.map(link => {
          return (
            <li key={link.id}>
              <NavLink href={`/${link.path}`}>{link.title}</NavLink>
            </li>
          );
        })}
      </ExtendedList>
    </NavbarExtendedContainer>
  );
};

export default NavigationMobile;
