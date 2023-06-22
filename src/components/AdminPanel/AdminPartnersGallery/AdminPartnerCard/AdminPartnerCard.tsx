import Image from "next/image";
import React, { FC } from "react";

import { IPartner } from "@/types";
import { deletePartner } from "@/services";
import {
  AdminCardImageBoxStyled,
  ItemPartnerCardStyled,
} from "./AdminPartnerCard.styled";
import AdminButtonDelete from "../../AdminButtonDelete";

const AdminPartnerCard: FC<IPartner> = ({ thumb, alt, id }) => {
  const onClickHandler = async () => {
    try {
      await deletePartner(id);
    } catch (error) {
      return;
    }
  };

  return (
    <ItemPartnerCardStyled>
      <AdminCardImageBoxStyled>
        <Image
          src={thumb}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width: 1440px) 371px, (min-width: 834px) 325px,(min-width: 393px) 321px, 100%"
        />
        <AdminButtonDelete
          title="партнера"
          onClick={onClickHandler}
          fetcherName="partners"
        />
      </AdminCardImageBoxStyled>
    </ItemPartnerCardStyled>
  );
};

export default AdminPartnerCard;
