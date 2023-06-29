import { FC } from "react";
import useSWR from "swr";

import { getCards } from "@/services";
import { Cards } from "@/types";
import Loader from "@/components/Loader";
import Card from "../AdminCard";
import {
  LinkAddCard,
  ListCardStyled,
  SvgAddCard,
} from "./AdminCardsGallery.styled";

const AdminCardsGallery: FC = () => {
  const { data, isLoading } = useSWR<Cards>("admin-cards", getCards);

  if (isLoading) return <Loader />;

  return (
    <ListCardStyled>
      {data &&
        data.cards?.map(({ id, thumb, title, alt, description }) => (
          <Card
            key={id}
            thumb={thumb}
            title={title}
            alt={alt}
            description={description}
            id={id}
          />
        ))}

      <li key={"add"}>
        <LinkAddCard href={"/admin/cards/form"}>
          <SvgAddCard
            src={"/icons/icon-park_add-one.svg"}
            alt="add"
            width={60}
            height={60}
          />
          Додати картку
        </LinkAddCard>
      </li>
    </ListCardStyled>
  );
};

export default AdminCardsGallery;
