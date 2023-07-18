import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { LogoImage } from "./Logo.styled";

const Logo: FC = () => {
  return (
    <>
      <Link href="/">
        <LogoImage>
          <Image
            src="/images/logo.svg"
            fill
            alt="logo"
            sizes="(min-width: 1440px) 241px, (min-width: 834px) 97px, 117px"
          />
        </LogoImage>
      </Link>
    </>
  );
};

export default Logo;
