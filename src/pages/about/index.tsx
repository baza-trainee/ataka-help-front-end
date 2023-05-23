import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import About from "@/components/About";
import PartnersGallery from "@/components/PartnersGallery";

const Cases: NextPage = () => {
  return (
    <UserLayout title="About">
      <Slider />
      <About />
      <PartnersGallery />
    </UserLayout>
  );
};

export default Cases;
