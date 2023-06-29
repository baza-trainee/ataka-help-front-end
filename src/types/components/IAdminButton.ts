import { MouseEventHandler } from "react";

export interface IAdminButton {
  imgSrc: string;
  title: string;
  imgAlt: string;
  onClick?: MouseEventHandler;
  className?: string;
}
