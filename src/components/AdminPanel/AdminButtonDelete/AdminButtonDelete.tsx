import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useSWRConfig } from "swr";
import {
  ButtonDeleteContainerStyled,
  ButtonDeleteStyled,
} from "./AdminButtonDelete.styled";
import Popup from "../Popup/Popup";

type DeleteProps = {
  title: string;
  onClick: () => Promise<void>;
  fetcherName: string;
};

const AdminButtonDelete = ({ title, onClick, fetcherName }: DeleteProps) => {
  const { mutate } = useSWRConfig();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handlerPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const handleClick = async () => {
    onClick()
      .then(() => setIsOpenPopup(false))
      .then(() => mutate(fetcherName));
  };

  return (
    <ButtonDeleteContainerStyled>
      {isOpenPopup &&
        createPortal(
          <Popup title={title} onClose={handlerPopup} onClick={handleClick} />,
          document.body,
        )}
      <ButtonDeleteStyled type="button" onClick={handlerPopup}>
        Видалити
      </ButtonDeleteStyled>
    </ButtonDeleteContainerStyled>
  );
};

export default AdminButtonDelete;
