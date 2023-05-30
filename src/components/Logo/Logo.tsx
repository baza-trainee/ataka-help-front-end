import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoImage } from "./Logo.styled";

const Logo: FC = () => {
  return (
    <>
      <Link href="/">
        <LogoImage>
          <Image src="/images/logo.png" fill alt="logo" />
        </LogoImage>
      </Link>
    </>
  );
};

export default Logo;
