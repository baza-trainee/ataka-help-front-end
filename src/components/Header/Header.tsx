import { FC, useRef, useState } from "react";

import { HeaderWrapper, LogoNavWrapper, OpenLinkButton } from "./Header.styled";
import Navigation from "../Navigation/Navigation";
import PaymentButton from "../PaymentButton/PaymentButton";
import Logo from "../Logo/Logo";
import NavigationMobile from "../Navigation/NavigationMobile";
import { Container, Section } from "../Common";
import Image from "next/image";

import burgerIcon from "/public/icons/burger-menu.svg";

const Header: FC = () => {
  const [isNavBarShown, setIsNavBarShown] = useState<boolean>(false);

  const handleToggleNavbar = (): void => {
    setIsNavBarShown((prev: boolean) => !prev);
  };

  return (
    <HeaderWrapper>
      <Section
        style={{ position: "relative" }}
        as="div"
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
            <Navigation />
            <OpenLinkButton onClick={handleToggleNavbar}>
              {isNavBarShown ? (
                <>&#10005;</>
              ) : (
                <Image src={burgerIcon} alt="burgerIcon" />
              )}
            </OpenLinkButton>
          </LogoNavWrapper>
          {isNavBarShown && <NavigationMobile />}
        </Container>
      </Section>
    </HeaderWrapper>
  );
};

export default Header;
