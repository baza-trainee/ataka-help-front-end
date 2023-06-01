import { ICard } from "@/types";

import { FC } from "react";
import {
  ItemCardStyled,
  ImageStyled,
  BtnCardStyled,
  BoxTextStyled,
  TextCardStyled,
} from "./Card.styled";

const Card: FC<ICard> = ({ image, text }) => {
  return (
    <ItemCardStyled>
      <ImageStyled src={image} alt="picture" width={371} height={141} />
      <BoxTextStyled>
        <TextCardStyled>{text}</TextCardStyled>
      </BoxTextStyled>
      <BtnCardStyled type="button">Як діяти?</BtnCardStyled>
    </ItemCardStyled>
  );
};

export default Card;
