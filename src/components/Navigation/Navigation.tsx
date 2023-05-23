import { FC } from "react";
import Link from "next/link";
import { List } from "./Navigation.styled";

const Navigation: FC = () => {
  return (
    <nav>
      <List>
        <li>
          <Link href="/">Головна</Link>
        </li>
        <li>
          <Link href="/cases">Інциденти</Link>
        </li>
        <li>
          <Link href="/contacts">Контакти</Link>
        </li>
      </List>
    </nav>
  );
};

export default Navigation;
