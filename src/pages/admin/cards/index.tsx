import type { NextPage } from "next";

import AdminLayout from "@/components/AdminPanel/AdminLayout";
import AdminCardsGallery from "@/components/AdminPanel/AdminCardsGallery";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Cards: NextPage = () => {
  return (
    <AdminLayout title="Картки">
      <RoutingComponent routes={["Категорії", "Картки"]} />
      <AdminCardsGallery />
    </AdminLayout>
  );
};

export default Cards;
