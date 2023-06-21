import { FC, useState } from "react";

import { ICard } from "@/types";

import Image from "next/image";

import {
  ItemCardStyled,
  ImageBoxStyled,
  BtnCardStyled,
  BoxTextStyled,
  TextCardStyled,
  CardContainer,
} from "./AdminCard.styled";
import Modal from "@/components/Modal";
import CardModal from "@/components/CardModal";
import AdminButtonDelete from "../AdminButtonDelete";
import { deleteCard } from "@/services";

const AdminCard: FC<ICard> = ({ thumb, title, alt, description, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onClickHandler = async () => {
    try {
      const response = await deleteCard(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ItemCardStyled>
        <CardContainer>
          <ImageBoxStyled>
            <Image
              src={thumb}
              alt={alt}
              fill
              sizes="(min-width: 1440px) 371px, (min-width: 834px) 325px,(min-width: 393px) 321px, 100%"
            />
          </ImageBoxStyled>
          <BoxTextStyled>
            <TextCardStyled>{title}</TextCardStyled>
          </BoxTextStyled>
          <BtnCardStyled type="button" onClick={openModal}>
            Як діяти?
          </BtnCardStyled>
        </CardContainer>
        <AdminButtonDelete title="картку" onClick={onClickHandler} />
      </ItemCardStyled>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <CardModal description={description} />
        </Modal>
      )}
    </>
  );
};

export default AdminCard;
