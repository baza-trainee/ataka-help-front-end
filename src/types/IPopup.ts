import React from "react";

export interface IPopup {
  title: string;
  onClick?: React.MouseEventHandler;
  onClose?: React.MouseEventHandler;
}
