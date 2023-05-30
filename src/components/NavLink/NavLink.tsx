import { FC } from "react";
import Link from "next/link";
import { StyledLink } from "./NavLink.styled";

const NavLink: FC<{
  href: string;
  children: string;
  isButton?: boolean;
}> = ({ href, children, isButton }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink isButton={isButton}>{children}</StyledLink>
    </Link>
  );
};

export default NavLink;
