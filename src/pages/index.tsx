import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery/CardsGallery";

// import FileOpenLink from "@/components/FileOpenLink";
import DonateMainPage from "@/components/Donate/DonateMainPage";

const Home: NextPage = () => {
  return (
    <UserLayout title="Cases">
      <Slider />

      <CardsGallery />
      <DonateMainPage />
      {/* <FileOpenLink path="/M8 FAQ_Russian.pdf" text="text" /> */}
    </UserLayout>
  );
};

export default Home;
