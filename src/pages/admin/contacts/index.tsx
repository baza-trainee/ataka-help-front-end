import type { NextPage } from "next";
import ContactForm from "@/components/AdminPanel/ContactForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import { Section } from "@/components/AdminPanel/CommonFormStyles";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Contacts: NextPage = () => {
  return (
    <AdminLayout>
      <Section>
        <RoutingComponent routes={["Категорії", "Контакти"]} />
        <ContactForm />
      </Section>
    </AdminLayout>
  );
};

export default Contacts;
