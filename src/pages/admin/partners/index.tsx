import type { NextPage } from "next";
import AdminPartnersGallery from "@/components/AdminPanel/AdminPartnersGallery";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import { Section } from "@/components/AdminPanel/CommonFormStyles";

const Cards: NextPage = () => {
  return (
    <AdminLayout>
      <Section>
        <RoutingComponent routes={["Категорії", "Лого партнерів"]} />
        <AdminPartnersGallery />
      </Section>
    </AdminLayout>
  );
};

export default Cards;
