import { FC } from "react";
import Link from "next/link";
import { StyledLink } from "./NavLink.styled";

const NavLink: FC<{ href: string; name: string }> = ({ href, name }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink>{name}</StyledLink>
    </Link>
  );
};

export default NavLink;
