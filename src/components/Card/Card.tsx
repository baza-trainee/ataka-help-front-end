import { ICard } from "@/types";

import { FC } from "react";
import Image from "next/image";
import {
  ItemCardStyled,
  ImageBoxStyled,
  BtnCardStyled,
  BoxTextStyled,
  TextCardStyled,
} from "./Card.styled";

const Card: FC<ICard> = ({ image, text }) => {
  return (
    <ItemCardStyled>
      <ImageBoxStyled>
        <Image
          src={image}
          alt="picture"
          fill
          sizes="(min-width: 1440px) 371px, (min-width: 834px) 325px,(min-width: 393px) 321px, 100%"
        />
      </ImageBoxStyled>
      <BoxTextStyled>
        <TextCardStyled>{text}</TextCardStyled>
      </BoxTextStyled>
      <BtnCardStyled type="button">Як діяти?</BtnCardStyled>
    </ItemCardStyled>
  );
};

export default Card;
