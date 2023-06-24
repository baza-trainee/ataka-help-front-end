import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import UsefulInformation from "@/components/UsefulInformation";
import information from "@/data/useful-information.json";

import { UsefulInformationPagePropsType } from "@/types/pages";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const HowToChoosePassword: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
}) => {
  const title = information[0].title;
  const blockOne = information[0].blockOne;
  const blockTwo = information[0].blockTwo;

  return (
    <UserLayout title="HowToChoosePassword" contacts={contacts} report={report}>
      <Slider />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default HowToChoosePassword;
