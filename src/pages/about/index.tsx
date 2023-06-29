import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import About from "@/components/About";
import PartnersGallery from "@/components/PartnersGallery";
import Donate from "@/components/Donate";

import { AboutPagePropsType } from "@/types";
import { getAboutPageData } from "@/services";

export const getStaticProps = async () => {
  const result = await getAboutPageData();
  return result;
};

const Cases: NextPage<AboutPagePropsType> = ({
  contacts,
  report,
  slider,
  partners,
}) => {
  return (
    <UserLayout title="About" contacts={contacts} report={report}>
      <Slider slider={slider?.slider} />
      <About />
      <PartnersGallery partners={partners?.partners} total={partners?.total} />
      <Donate />
    </UserLayout>
  );
};

export default Cases;
