import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import UsefulInformation from "@/components/UsefulInformation";
import information from "@/data/useful-information.json";

const HowToChooseAntivirus: NextPage = () => {
  const title = information[3].title;
  const blockOne = information[3].blockOne;
  const blockTwo = information[3].blockTwo;

  return (
    <UserLayout title="HowToChooseAntivirus">
      <Slider />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default HowToChooseAntivirus;
