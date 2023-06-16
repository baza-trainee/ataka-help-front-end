import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery/CardsGallery";
import DonateMainPage from "@/components/Donate/DonateMainPage";

import { HomePagePropsType } from "@/types/PagesTypes";
import { getHomePageData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getHomePageData();  
  return result;
};

const Home: NextPage<HomePagePropsType> = ({ contacts, report, cards }) => {
  return (
    <UserLayout title="Cases" contacts={contacts} report={report}>
      <Slider />
      <CardsGallery cards={cards.cards} total={cards.total} />

      <DonateMainPage />
    </UserLayout>
  );
};

export default Home;
