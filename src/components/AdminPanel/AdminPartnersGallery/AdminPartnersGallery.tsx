import React, { FC } from "react";
import AdminPartnerCard from "./AdminPartnerCard/AdminPartnerCard";
import { IPartner } from "@/types";
import {
  AdminListPartnersStyled,
  LinkAddPartner,
  SvgAddPartner,
} from "./AdminPartnersGallery.styled";

const partners = [
  { id: "1", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "2", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "3", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "4", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "5", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "6", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "7", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "8", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "9", image: `/images/partner-logo.png`, alt: "Universe" },
  { id: "10", image: `/images/partner-logo.png`, alt: "Universe" },
];

const AdminPartnersGallery: FC = () => {
  return (
    <AdminListPartnersStyled>
      {partners.map((partner, idx) => {
        if (idx !== partners.length - 1) {
          return (
            <AdminPartnerCard
              key={partner.id}
              image={partner.image}
              alt={partner.alt}
              id={partner.id}
            />
          );
        }
        return (
          <>
            <AdminPartnerCard
              key={partner.id}
              image={partner.image}
              alt={partner.alt}
              id={partner.id}
            />
            <li key={"add"}>
              <LinkAddPartner href={"/admin/partners/form"}>
                <SvgAddPartner
                  src={"/icons/icon-park_add-one.svg"}
                  alt="add"
                  width={60}
                  height={60}
                />
                Додати лого
              </LinkAddPartner>
            </li>
          </>
        );
      })}
    </AdminListPartnersStyled>
  );
};

export default AdminPartnersGallery;
