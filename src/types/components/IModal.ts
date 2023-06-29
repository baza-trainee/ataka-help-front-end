import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModal {
  children: ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
