import Head from "next/head";
import type { NextPage } from "next";
import useSWR from "swr";

import Link from "next/link";
import { deleteCard, getCards } from "@/services";
import AdminCardsGallery from "@/components/AdminPanel/AdminCardsGallery/AdminCardsGallery";

const Cards: NextPage = () => {
  const { data, error } = useSWR("admin-cards", getCards);
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  return <AdminCardsGallery cards={data.cards} total={data.total} />;
};

export default Cards;
