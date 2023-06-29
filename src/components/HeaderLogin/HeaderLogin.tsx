import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  HeaderWrapper,
  LogoNavWrapper,
  CloseButton,
} from "./HeaderLogin.styled";

const HeaderLogin: FC = () => {
  const router = useRouter();

  const handleCloseButtonClick = (): void => {
    router.push("/");
  };

  return (
    <HeaderWrapper>
      <LogoNavWrapper>
        <Image
          src={"/images/logo.svg"}
          width={151}
          height={58}
          alt="logoImage"
        />

        <CloseButton onClick={handleCloseButtonClick}>
          <Image
            width={24}
            height={24}
            src={"/icons/close.svg"}
            alt="closeIcon"
          />
        </CloseButton>
      </LogoNavWrapper>
    </HeaderWrapper>
  );
};

export default HeaderLogin;
