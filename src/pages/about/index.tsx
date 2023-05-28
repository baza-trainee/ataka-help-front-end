import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import About from "@/components/About";
import PartnersGallery from "@/components/PartnersGallery";
import Donate from "@/components/Donate";

const Cases: NextPage = () => {
  return (
    <UserLayout title="About">
      <Slider />
      <About />
      <PartnersGallery />
      <Donate />
    </UserLayout>
  );
};

export default Cases;
