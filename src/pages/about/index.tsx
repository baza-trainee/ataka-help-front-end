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
    <UserLayout
      title="Про проєкт"
      contacts={contacts}
      report={report}
      content="Проєкт Ataka Help: боротьба з шахрайством в мережі та інформування про способи обману. Захистіть свої платіжні дані та уникніть шахрайських атак."
      keywords="Проєкт Ataka Help, шахрайство в мережі, боротьба з шахрайством, поради щодо захисту"
    >
      <Slider slider={slider?.slider} />
      <About />
      <PartnersGallery partners={partners?.partners} total={partners?.total} />
      <Donate />
    </UserLayout>
  );
};

export default Cases;
