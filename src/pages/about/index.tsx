import Head from "next/head";

import UserLayout from "@/components/UserLayout";
import SimpleSlider from "@/components/Slider";
import About from "@/components/About";
import PartnersGallery from "@/components/PartnersGallery";

export default function Cases() {
  return (
    <UserLayout title="About">
      <SimpleSlider />
      <About />
      <PartnersGallery />
    </UserLayout>
  );
}
