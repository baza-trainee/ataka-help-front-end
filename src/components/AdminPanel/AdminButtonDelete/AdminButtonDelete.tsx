import React from "react";
import {
  ButtonDeleteContainerStyled,
  ButtonDeleteStyled,
} from "./AdminButtonDelete.styled";

const AdminButtonDelete = () => {
  return (
    <ButtonDeleteContainerStyled>
      <ButtonDeleteStyled type="button">Видалити</ButtonDeleteStyled>
    </ButtonDeleteContainerStyled>
  );
};

export default AdminButtonDelete;
