import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import Slider from "@/components/Slider";
import UsefulInformation from "@/components/UsefulInformation";
import information from "@/data/useful-information.json";

const HowToChangePassword: NextPage = () => {
  const title = information[1].title;
  const blockOne = information[1].blockOne;
  const blockTwo = information[1].blockTwo;

  return (
    <UserLayout title="HowToChangePassword">
       <Slider />
      <UsefulInformation title={title} text1={blockOne} text2={blockTwo}/>
    </UserLayout>
  );
};

export default HowToChangePassword;
