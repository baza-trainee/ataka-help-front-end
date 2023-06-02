import { FC, useState } from "react";

import { ICard } from "@/types";

import Image from "next/image";

import {
  ItemCardStyled,
  ImageBoxStyled,
  BtnCardStyled,
  BoxTextStyled,
  TextCardStyled,
} from "./Card.styled";
import Modal from "../Modal/Modal";
import CardModal from "../CardModal/CardModal";

const Card: FC<ICard> = ({ image, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
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
        <BtnCardStyled type="button" onClick={openModal}>
          Як діяти?
        </BtnCardStyled>
      </ItemCardStyled>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <CardModal />
        </Modal>
      )}
    </>
  );
};

export default Card;
