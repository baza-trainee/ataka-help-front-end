import { FC, useState } from "react";

import { HeaderWrapper, LogoNavWrapper } from "./Header.styled";
import Navigation from "../Navigation/Navigation";
import PaymentButton from "../PaymentButton/PaymentButton";
import Logo from "../Logo/Logo";
import NavigationMobile from "../Navigation/NavigationMobile";
import { Container, Section } from "../Common";

const Header: FC = () => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <Section
        as="header"
        ptd="48px"
        pbd="49px"
        ptt="33px"
        pbt="34px"
        ptm="20px"
        pbm="20px"
      >
        <Container>
          <LogoNavWrapper>
            <Logo />
            <Navigation
              toggleNavbar={toggleNavbar}
              setToggleNavbar={setToggleNavbar}
            />
            {/* <PaymentButton /> */}
          </LogoNavWrapper>
          {toggleNavbar && <NavigationMobile />}
        </Container>
      </Section>
    </HeaderWrapper>
  );
};

export default Header;
