import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import { deleteCard, getCards } from "@/services";
import AdminCardsGallery from "@/components/AdminPanel/AdminCardsGallery/AdminCardsGallery";
import { Cards } from "@/types";

export const getServerSideProps = async () => {
  try {
    const response = await getCards();

    return { props: { cards: response.cards, total: response.total } };
  } catch (error) {
    console.log(error);
  }
};

const Cards: NextPage<Cards> = ({ cards, total }) => {
  const deleteOneCard = async (id: string) => {
    try {
      const response = await deleteCard(id);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return <AdminCardsGallery cards={cards} total={total} />;
};

export default Cards;
