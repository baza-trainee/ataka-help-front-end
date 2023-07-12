import React, { FC } from "react";
import useSWR from "swr";

import { getPartners } from "@/services";
import Loader from "@/components/Loader";
import AdminPartnerCard from "./AdminPartnerCard";
import {
  AdminListPartnersStyled,
  LinkAddPartner,
  SvgAddPartner,
} from "./AdminPartnersGallery.styled";

const AdminPartnersGallery: FC = () => {
  const { data, isLoading } = useSWR("partners", getPartners);
  if (isLoading) return <Loader />;

  return (
    <AdminListPartnersStyled>
      {data &&
        data.partners?.map(({ id, thumb, alt }) => (
          <AdminPartnerCard key={id} thumb={thumb} alt={alt} id={id} />
        ))}
      <li key={"addPartner"}>
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
    </AdminListPartnersStyled>
  );
};

export default AdminPartnersGallery;
