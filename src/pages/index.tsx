import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery/CardsGallery";

// import FileOpenLink from "@/components/FileOpenLink";
import DonateMainPage from "@/components/Donate/DonateMainPage";
import { getCards } from "@/services";
import { Cards } from "@/types";

const Home: NextPage = ({
  cards,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <UserLayout title="Cases">
      <Slider />

      <CardsGallery cards={cards.cards} total={cards.total} />
      <DonateMainPage />
      {/* <FileOpenLink path="/M8 FAQ_Russian.pdf" text="text" /> */}
    </UserLayout>
  );
};

export default Home;
export const getStaticProps: GetStaticProps<{ cards: Cards }> = async () => {
  console.log("revalidate");
  const cards = await getCards();

  return {
    props: {
      cards,
    },
    revalidate: 120,
  };
};
