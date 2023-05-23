import { FC } from "react";
import Link from "next/link";
import { StyledLink } from "./NavLink.styled";

const NavLink: FC<{
  href: string;
  children: string;
  isUnderlined?: boolean;
  isFooter?: boolean;
  isButton?: boolean;
}> = ({ href, children, isUnderlined, isFooter, isButton }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink
        isUnderlined={isUnderlined}
        isFooter={isFooter}
        isButton={isButton}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

export default NavLink;
