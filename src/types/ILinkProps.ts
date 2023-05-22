import { ReactNode } from "react";

export interface ILinkProps {
  isUnderlined?: boolean;
  isFooter?: boolean;
  isButton?: boolean;
  children: ReactNode;
}
