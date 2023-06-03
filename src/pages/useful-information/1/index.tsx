import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import UsefulInformation from "@/components/UsefulInformation";
import information from "@/data/useful-information.json";

const HowToChoosePassword: NextPage = () => {
  const title = information[0].title;
  const blockOne = information[0].blockOne;
  const blockTwo = information[0].blockTwo;

  return (
    <UserLayout title="HowToChoosePassword">
      <Slider />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default HowToChoosePassword;
