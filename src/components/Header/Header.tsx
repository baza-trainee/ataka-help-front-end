import { FC } from "react";

import { MainHeader } from "./Header.styled";
import Navigation from "../Navigation/Navigation";
import PaymentButton from "../PaymentButton/PaymentButton";
import Logo from "../Logo/Logo";

const Header: FC = () => {
  return (
    <MainHeader>
      <Logo />
      <Navigation />
      <PaymentButton />
    </MainHeader>
  );
};

export default Header;
