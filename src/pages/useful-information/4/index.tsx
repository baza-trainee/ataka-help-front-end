import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import UsefulInformation from "@/components/UsefulInformation";
import information from "@/data/useful-information.json";

import { UsefulInformationPagePropsType } from "@/types";
import { getUsefullInfoData } from "@/services";

export const getStaticProps = async () => {
  const result = await getUsefullInfoData();
  return result;
};

const HowToChooseAntivirus: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
  slider,
}) => {
  const title = information[3].title;
  const blockOne = information[3].blockOne;
  const blockTwo = information[3].blockTwo;

  return (
    <UserLayout
      title="HowToChooseAntivirus"
      contacts={contacts}
      report={report}
    >
      <Slider slider={slider?.slider} />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default HowToChooseAntivirus;
