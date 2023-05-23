import { Dispatch, ReactNode, SetStateAction } from 'react';

export type IModal = {
  children: ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};
