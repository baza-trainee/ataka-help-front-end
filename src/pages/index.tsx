import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery/CardsGallery";

import DonateMainPage from "@/components/Donate/DonateMainPage";
import { getCards } from "@/services";
import { Cards } from "@/types";

type PageProps = {
  cards: Cards;
};

const Home: NextPage<PageProps> = ({
  cards,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <UserLayout title="Cases">
      <Slider />

      <CardsGallery cards={cards.cards} total={cards.total} />
      <DonateMainPage />
    </UserLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ cards: Cards }> = async () => {
  const cards = await getCards();

  return {
    props: {
      cards,
    },
    revalidate: 120,
  };
};
