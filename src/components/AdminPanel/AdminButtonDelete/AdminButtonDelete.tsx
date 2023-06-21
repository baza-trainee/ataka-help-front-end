import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  ButtonDeleteContainerStyled,
  ButtonDeleteStyled,
} from "./AdminButtonDelete.styled";
import Popup from "../Popup/Popup";

type DeleteProps = {
  title: string;
  onClick: () => Promise<void>;
};

const AdminButtonDelete = ({ title, onClick }: DeleteProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handlerPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const handleClick = async () => {
    onClick().then(() => setIsOpenPopup(false));
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
