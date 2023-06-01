import { FC, useState } from "react";

import { HeaderWrapper, HeaderContainer } from "./Header.styled";
import Navigation from "../Navigation/Navigation";
import PaymentButton from "../PaymentButton/PaymentButton";
import Logo from "../Logo/Logo";
import NavigationMobile from "../Navigation/NavigationMobile";

const Header: FC = () => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  return (
    <HeaderWrapper
      as="header"
      ptd="48px"
      pbd="49px"
      ptt="33px"
      pbt="34px"
      ptm="20px"
      pbm="20px"
    >
      <HeaderContainer>
        <Logo />
        <Navigation
          toggleNavbar={toggleNavbar}
          setToggleNavbar={setToggleNavbar}
        />
        {/* <PaymentButton /> */}
      </HeaderContainer>
      {toggleNavbar && <NavigationMobile />}
    </HeaderWrapper>
  );
};

export default Header;
