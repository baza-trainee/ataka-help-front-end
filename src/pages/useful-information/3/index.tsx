import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import UsefulInformation from "@/components/UsefulInformation";
import Slider from "@/components/Slider";
import Header from "@/components/Header";

const text1 = `Lorem ipsum dolor sit amet consectetur. Vel pellentesque lacus
vestibulum sed aliquet orci tristique convallis vulputate.
Imperdiet non rhoncus cursus mattis nec et vestibulum odio. Erat
hendrerit vitae auctor diam cursus adipiscing donec pharetra.
Imperdiet non tincidunt eu massa lacus vitae rutrum eu sodales.
Phasellus placerat donec sed praesent. Imperdiet orci pellentesque
duis lorem egestas phasellus. Commodo nunc eu non amet imperdiet
nec volutpat massa.`;

const text2 = `Lorem ipsum dolor sit amet consectetur. Vel pellentesque lacus
vestibulum sed aliquet orci tristique convallis vulputate.
Imperdiet non rhoncus cursus mattis nec et vestibulum odio. Erat
hendrerit vitae auctor diam cursus adipiscing donec pharetra.
Imperdiet non tincidunt eu massa lacus vitae rutrum eu sodales.
Phasellus placerat donec sed praesent. Imperdiet orci pellentesque
duis lorem egestas phasellus. Commodo nunc eu non amet imperdiet
nec volutpat massa.`;

const TwoFactorAuthentication: NextPage = () => {
  return (
    <UserLayout title="TwoFactorAuthentication">
      <Slider />
      <UsefulInformation
        title="Що таке двохфакторна аутентифікація"
        text1={text1}
        text2={text2}
      />
    </UserLayout>
  );
};

export default TwoFactorAuthentication;
