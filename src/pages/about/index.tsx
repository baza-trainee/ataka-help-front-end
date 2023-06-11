import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import About from "@/components/About";
import PartnersGallery from "@/components/PartnersGallery";
import Donate from "@/components/Donate";

import { AboutPagePropsType } from "@/types/PagesTypes";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const Cases: NextPage<AboutPagePropsType> = ({ contacts, report }) => {
  return (
    <UserLayout title="About" contacts={contacts} report={report}>
      <Slider />
      <About />
      <PartnersGallery />
      <Donate />
    </UserLayout>
  );
};

export default Cases;
