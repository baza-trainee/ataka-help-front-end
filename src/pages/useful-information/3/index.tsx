import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import UsefulInformation from "@/components/UsefulInformation";
import Slider from "@/components/Slider";
import information from "@/data/useful-information.json";

import { UsefulInformationPagePropsType } from "@/types/pages";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const TwoFactorAuthentication: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
}) => {
  const title = information[2].title;
  const blockOne = information[2].blockOne;
  const blockTwo = information[2].blockTwo;

  return (
    <UserLayout
      title="TwoFactorAuthentication"
      contacts={contacts}
      report={report}
    >
      <Slider />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default TwoFactorAuthentication;
