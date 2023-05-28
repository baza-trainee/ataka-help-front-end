import { Theme } from "@emotion/react";

export interface IFileOpenLink {
  text: string;
  pathForDesktop: string;
  pathForTablet: string;
  pathForMobile: string;
  isTextUnderline?: boolean;
  isCookiesButtonStyles?: boolean;
  isFooterButtonStyles?: boolean;
}

export interface IStyles {
  theme: Theme;
}

export interface IOpenLink {
  isTextUnderline?: boolean;
  isCookiesButtonStyles?: boolean;
  isFooterButtonStyles?: boolean;
}
