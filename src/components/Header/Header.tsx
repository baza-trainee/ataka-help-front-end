import { FC, useState } from "react";

import { MainHeader, Container } from "./Header.styled";
import Navigation from "../Navigation/Navigation";
import PaymentButton from "../PaymentButton/PaymentButton";
import Logo from "../Logo/Logo";
import NavigationMobile from "../Navigation/NavigationMobile";

const Header: FC = () => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  return (
    <MainHeader>
      <Container>
        <Logo />
        <Navigation
          toggleNavbar={toggleNavbar}
          setToggleNavbar={setToggleNavbar}
        />
        <PaymentButton />
      </Container>
      {toggleNavbar && <NavigationMobile />}
    </MainHeader>
  );
};

export default Header;
