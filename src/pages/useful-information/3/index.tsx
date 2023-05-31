import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import UsefulInformation from "@/components/UsefulInformation";
import Slider from "@/components/Slider";
import information from "../../../../public/files/useful-information.json";

const TwoFactorAuthentication: NextPage = () => {  
  const title = information[2].title;
  const blockOne = information[2].blockOne;
  const blockTwo = information[2].blockTwo;

  return (
    <UserLayout title="TwoFactorAuthentication">
      <Slider />
      <UsefulInformation title={title} />
    </UserLayout>
  );
};

export default TwoFactorAuthentication;
