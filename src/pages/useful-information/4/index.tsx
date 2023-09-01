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

const HowToChooseAntivirus: NextPage<UsefulInformationPagePropsType> = ({
  contacts,
  report,
  slider,
}) => {
  const title = information[3].title;
  const blockOne = information[3].blockOne;
  const blockTwo = information[3].blockTwo;

  return (
    <UserLayout
      title="Як обрати антивірус"
      contacts={contacts}
      report={report}
      content="Як встановити антивірус: оберіть розробника, завантажте програму і забезпечте захист від атак з інтернету. Рекомендації для встановлення антивіруса на різних пристроях."
      keywords="Встановлення антивіруса, налаштування антивірусу, Microsoft Defender"
    >
      <Slider slider={slider?.slider} />
      <UsefulInformation
        title={title}
        text1={blockOne}
        text2={blockTwo}
        src_1={"/images/3d-internet-secuirty-badge-min.jpg"}
        src_2={"/images/close-up-smartphone-with-mock-up-min.jpg"}
      />
    </UserLayout>
  );
};

export default HowToChooseAntivirus;
