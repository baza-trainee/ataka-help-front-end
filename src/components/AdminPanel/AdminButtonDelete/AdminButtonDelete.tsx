import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  ButtonDeleteContainerStyled,
  ButtonDeleteStyled,
} from "./AdminButtonDelete.styled";
import Popup from "../Popup/Popup";

const AdminButtonDelete = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handlerPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };
  return (
    <ButtonDeleteContainerStyled>
      {isOpenPopup &&
        createPortal(
          <Popup title={"картку"} onClose={handlerPopup} />,
          document.body,
        )}
      <ButtonDeleteStyled type="button" onClick={handlerPopup}>
        Видалити
      </ButtonDeleteStyled>
    </ButtonDeleteContainerStyled>
  );
};

export default AdminButtonDelete;
