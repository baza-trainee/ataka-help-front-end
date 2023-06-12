import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import FeedbackForm from "@/components/FeedbackForm";
import ContactsSection from "@/components/Contacts";

import { ContactsPagePropsType } from "@/types/PagesTypes";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const Contacts: NextPage<ContactsPagePropsType> = ({ contacts, report }) => {
  return (
    <UserLayout title="Contacts" contacts={contacts} report={report}>
      <ContactsSection />
      <FeedbackForm />
    </UserLayout>
  );
};

export default Contacts;
