import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import UsefulInformation from "@/components/UsefulInformation";
import Slider from "@/components/Slider";
import information from "@/data/useful-information.json";

import { UsefulInformationPagePropsType } from "@/types";
import { getUsefullInfoData } from "@/services";

export const getStaticProps = async () => {
  const result = await getUsefullInfoData();
  return result;
};

const TwoFactorAuthentication: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
  slider,
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
      <Slider slider={slider?.slider} />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default TwoFactorAuthentication;
