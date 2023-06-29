import { FC, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

import { ICard } from "@/types";
import { deleteCard } from "@/services";
import Modal from "@/components/Modal";
import CardModal from "@/components/CardModal";
import {
  ItemCardStyled,
  ImageBoxStyled,
  BtnCardStyled,
  BoxTextStyled,
  TextCardStyled,
  CardContainer,
} from "./AdminCard.styled";
import AdminButtonDelete from "../AdminButtonDelete";

const AdminCard: FC<ICard> = ({ thumb, title, alt, description, id }) => {
  console.log(thumb);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const myLoader = ({ src }: any) => {
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${thumb}`;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onClickHandler = async () => {
    try {
      await deleteCard(id);
      toast.success("Картку успішно видалено");
    } catch (error) {
      toast.error("Сталася помилка, спробуйте пізніше");
    }
  };

  return (
    <>
      <ItemCardStyled>
        <CardContainer>
          <ImageBoxStyled>
            <Image
              loader={myLoader}
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
        </CardContainer>
        <AdminButtonDelete
          title="картку"
          onClick={onClickHandler}
          fetcherName="admin-cards"
        />
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
