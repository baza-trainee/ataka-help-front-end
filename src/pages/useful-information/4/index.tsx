import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import UsefulInformation from "@/components/UsefulInformation";
import information from "@/data/useful-information.json";

import { UsefulInformationPagePropsType } from "@/types/pages";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const HowToChooseAntivirus: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
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
      <Slider />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default HowToChooseAntivirus;
