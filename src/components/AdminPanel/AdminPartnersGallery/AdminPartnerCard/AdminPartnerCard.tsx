import { IPartner } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import {
  AdminCardImageBoxStyled,
  ItemPartnerCardStyled,
} from "./AdminPartnerCard.styled";
import AdminButtonDelete from "../../AdminButtonDelete/AdminButtonDelete";
import { deletePartner } from "@/services";

interface PartnerCardProps {
  image: string;
  alt: string;
  id: string;
}

const AdminPartnerCard: FC<PartnerCardProps> = ({ image, alt, id }) => {
  const onClickHandler = async () => {
    try {
      const response = await deletePartner(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ItemPartnerCardStyled>
      <AdminCardImageBoxStyled>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1440px) 371px, (min-width: 834px) 325px,(min-width: 393px) 321px, 100%"
        />
        <AdminButtonDelete title="партнера" onClick={onClickHandler} />
        {/* <PartnerButtonDeleteContainerStyled>
          <PartnerButtonDeleteStyled type="button">
            Видалити
          </PartnerButtonDeleteStyled>
        </PartnerButtonDeleteContainerStyled> */}
      </AdminCardImageBoxStyled>
    </ItemPartnerCardStyled>
  );
};

export default AdminPartnerCard;
