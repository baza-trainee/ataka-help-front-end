import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import FeedbackClientForm from "@/components/FeedbackForm/FeedbackClient";
import ContactsSection from "@/components/Contacts";

import { ContactsPagePropsType } from "@/types/pages";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const Contacts: NextPage<ContactsPagePropsType> = ({ contacts, report }) => {
  return (
    <UserLayout
      title="Контакти"
      contacts={contacts}
      report={report}
      content="Сторінка контактів та форма зворотного зв'язку: надішліть запитання, пропозиції або відгуки та зв'яжіться з нами зручним способом."
      keywords="Проєкт Ataka Help, зворотний зв'язок, контактна інформація"
    >
      <ContactsSection contacts={contacts} />
      <FeedbackClientForm />
    </UserLayout>
  );
};

export default Contacts;
