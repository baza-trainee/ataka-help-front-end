import { IPartner } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import {
  AdminCardImageBoxStyled,
  ItemPartnerCardStyled,
  PartnerButtonDeleteContainerStyled,
  PartnerButtonDeleteStyled,
} from "./AdminPartnerCard.styled";

interface PartnerCardProps {
  image: string;
  alt: string;
}

const AdminPartnerCard: FC<PartnerCardProps> = ({ image, alt }) => {
  return (
    <ItemPartnerCardStyled>
      <AdminCardImageBoxStyled>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1440px) 371px, (min-width: 834px) 325px,(min-width: 393px) 321px, 100%"
        />
        <PartnerButtonDeleteContainerStyled>
          <PartnerButtonDeleteStyled type="button">
            Видалити
          </PartnerButtonDeleteStyled>
        </PartnerButtonDeleteContainerStyled>
      </AdminCardImageBoxStyled>
    </ItemPartnerCardStyled>
  );
};

export default AdminPartnerCard;
