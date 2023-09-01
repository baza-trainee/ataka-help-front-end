import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import Slider from "@/components/Slider";
import UsefulInformation from "@/components/UsefulInformation";
import information from "@/data/useful-information.json";

import { UsefulInformationPagePropsType } from "@/types";
import { getUsefullInfoData } from "@/services";

export const getStaticProps = async () => {
  const result = await getUsefullInfoData();
  return result;
};

const HowToChoosePassword: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
  slider,
}) => {
  const title = information[0].title;
  const blockOne = information[0].blockOne;
  const blockTwo = information[0].blockTwo;

  return (
    <UserLayout
      title="Як обрати пароль"
      contacts={contacts}
      report={report}
      content="Як обрати надійний пароль: формат, цифри, спеціальні знаки та емоційні слова."
      keywords="обрати пароль, формат паролю, складність паролю"
    >
      <Slider slider={slider?.slider} />
      <UsefulInformation
        title={title}
        text1={blockOne}
        text2={blockTwo}
        src_1={"/images/woman-working-computer-network-graphic-overlay.jpg"}
        src_2={"null"}
      />
    </UserLayout>
  );
};

export default HowToChoosePassword;
