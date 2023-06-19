import type { NextPage } from "next";

import AdminLayout from "@/components/AdminPanel/AdminLayout";

import AdminCardsGallery from "@/components/AdminPanel/AdminCardsGallery/AdminCardsGallery";
import { Section } from "@/components/AdminPanel/CommonFormStyles";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Cards: NextPage = () => {
  return (
    <AdminLayout title="Cards">
      <Section>
        <RoutingComponent routes={["Категорії", "Картки"]} />
        <AdminCardsGallery />
      </Section>
    </AdminLayout>
  );
};

export default Cards;
