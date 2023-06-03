import { FC } from "react";
import Link from "next/link";
import { StyledLink } from "./NavLink.styled";

const NavLink: FC<{
  href: string;
  children: string;
  isFooter?: boolean;
  isButton?: boolean;
}> = ({ href, children, isFooter, isButton }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink isFooter={isFooter} isButton={isButton}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default NavLink;
