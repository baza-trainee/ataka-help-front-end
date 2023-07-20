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
    <UserLayout
      title="Інциденти"
      contacts={contacts}
      report={report}
      content="Отримайте корисні директиви та інструкції для забезпечення онлайн-безпеки. Дізнайтеся, як захистити себе від шахрайства, фішингу та інших онлайн-загроз. Будьте в курсі та приймайте обґрунтовані рішення для захисту."
      keywords="кібершахрайство, фішинг, захист рахунку, персональна інформація"
    >
      <Slider slider={slider?.slider} />
      <CardsGallery cards={cards?.cards} total={cards?.total} />

      <DonateMainPage />
    </UserLayout>
  );
};

export default Home;
