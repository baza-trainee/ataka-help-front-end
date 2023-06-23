import { FC } from "react";
import { useRouter } from "next/router";
import {
  HeaderWrapper,
  LogoNavWrapper,
  CloseButton,
} from "./HeaderLogin.styled";
import Image from "next/image";
import closeIcon from "/public/icons/close.svg";
import logoImage from "/public/images/logo.png";

const HeaderLogin: FC = () => {
  const router = useRouter();

  const handleCloseButtonClick = (): void => {
    router.push("/");
  };

  return (
    <HeaderWrapper>
      <LogoNavWrapper>
        <Image
          style={{ width: "151px", height: "58px" }}
          src={logoImage}
          alt="logoImage"
        />
        <CloseButton onClick={handleCloseButtonClick}>
          <Image
            style={{ width: "24px", height: "24px" }}
            src={closeIcon}
            alt="closeIcon"
          />
        </CloseButton>
      </LogoNavWrapper>
    </HeaderWrapper>
  );
};

export default HeaderLogin;
