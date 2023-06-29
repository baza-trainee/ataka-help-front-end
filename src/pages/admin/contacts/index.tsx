import type { NextPage } from "next";

import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import ContactsSection from "@/components/AdminPanel/ContactsSection";

const Contacts: NextPage = () => {
  return (
    <AdminLayout title="Contacts">
      <RoutingComponent routes={["Категорії", "Контакти"]} />
      <ContactsSection />
    </AdminLayout>
  );
};

export default Contacts;
