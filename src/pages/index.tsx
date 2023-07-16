import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery";
import DonateMainPage from "@/components/Donate/DonateMainPage";

import { HomePagePropsType } from "@/types";
import { getHomePageData } from "@/services";

export const getStaticProps = async () => {
  const result = await getHomePageData();

  return result;
};

const Home: NextPage<HomePagePropsType> = ({
  contacts,
  report,
  cards,
  slider,
}) => {
  return (
    <UserLayout title="Інциденти" contacts={contacts} report={report}>
      <Slider slider={slider?.slider} />
      <CardsGallery cards={cards?.cards} total={cards?.total} />

      <DonateMainPage />
    </UserLayout>
  );
};

export default Home;
