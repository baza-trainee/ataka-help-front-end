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

const HowToChangePassword: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
  slider,
}) => {
  const title = information[1].title;
  const blockOne = information[1].blockOne;
  const blockTwo = information[1].blockTwo;

  return (
    <UserLayout title="Як змінити пароль" contacts={contacts} report={report}>
      <Slider slider={slider?.slider} />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo} />
    </UserLayout>
  );
};

export default HowToChangePassword;
