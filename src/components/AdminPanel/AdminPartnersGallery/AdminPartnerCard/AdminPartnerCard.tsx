import Image from "next/image";
import React, { FC } from "react";
import { toast } from "react-toastify";

import { IPartner } from "@/types";
import { deletePartner } from "@/services";
import {
  AdminCardImageBoxStyled,
  ItemPartnerCardStyled,
} from "./AdminPartnerCard.styled";
import AdminButtonDelete from "../../AdminButtonDelete";

const AdminPartnerCard: FC<IPartner> = ({ thumb, alt, id }) => {
  const myLoader = ({ src }: any) => {
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${thumb}`;
  };

  const onClickHandler = async () => {
    try {
      await deletePartner(id);
      toast.success("Логотип партнера успішно видалено");
    } catch (error) {
      toast.error("Сталася помилка, спробуйте пізніше");
    }
  };

  return (
    <ItemPartnerCardStyled>
      <AdminCardImageBoxStyled>
        <Image
          loader={myLoader}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${thumb}`}
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
