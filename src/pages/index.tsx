import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import CardsGallery from "@/components/CardsGallery/CardsGallery";
import Donate from "@/components/Donate";

import FileOpenLink from "@/components/FileOpenLink";

const Home: NextPage = () => {
  return (
    <UserLayout title="Cases">
      <Slider />
      <CardsGallery />
      <Donate />
      <FileOpenLink path="/M8 FAQ_Russian.pdf" text="text" />
    </UserLayout>
  );
};

export default Home;
