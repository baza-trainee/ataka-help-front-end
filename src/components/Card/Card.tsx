import { FC, useState } from "react";
import Image from "next/image";

import { ICard } from "@/types";
import {
  ItemCardStyled,
  ImageBoxStyled,
  BtnCardStyled,
  BoxTextStyled,
  TextCardStyled,
} from "./Card.styled";
import Modal from "../Modal";
import CardModal from "../CardModal";

const Card: FC<ICard> = ({ thumb, title, alt, description, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <ItemCardStyled>
        <ImageBoxStyled id={id}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${thumb}`}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1440px) 371px, (min-width: 834px) 325px,(min-width: 393px) 321px, 100%"
          />
        </ImageBoxStyled>
        <BoxTextStyled>
          <TextCardStyled>{title}</TextCardStyled>
        </BoxTextStyled>
        <BtnCardStyled type="button" onClick={openModal}>
          Як діяти?
        </BtnCardStyled>
      </ItemCardStyled>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <CardModal description={description} />
        </Modal>
      )}
    </>
  );
};

export default Card;
