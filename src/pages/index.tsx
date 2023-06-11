import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery/CardsGallery";
import DonateMainPage from "@/components/Donate/DonateMainPage";

import { HomePagePropsType } from "@/types/PagesTypes";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const Home: NextPage<HomePagePropsType> = ({ contacts, report }) => {
  return (
    <UserLayout title="Cases" contacts={contacts} report={report}>
      <Slider />
      <CardsGallery />
      <DonateMainPage />
    </UserLayout>
  );
};

export default Home;
