import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout/UserLayout";
import FeedbackForm from "@/components/FeedbackForm";
import ContactsSection from "@/components/Contacts";

const Contacts: NextPage = () => {
  return (
    <UserLayout title="Contacts">
      <ContactsSection />
      <FeedbackForm />
    </UserLayout>
  );
};

export default Contacts;
