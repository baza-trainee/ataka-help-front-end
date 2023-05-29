import { Theme } from "@emotion/react";

export interface IFileOpenLink {
  text: string;
  path: string;
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
