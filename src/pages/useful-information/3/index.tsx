import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import UsefulInformation from "@/components/UsefulInformation";
import Slider from "@/components/Slider";
import Header from "@/components/Header";

const TwoFactorAuthentication: NextPage = () => {
  return (
    <UserLayout title="TwoFactorAuthentication">
       <Slider />
      <UsefulInformation title="Що таке двохфакторна аутентифікація"/>
    </UserLayout>
  );
};

export default TwoFactorAuthentication;
