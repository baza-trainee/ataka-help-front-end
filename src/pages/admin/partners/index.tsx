import type { NextPage } from "next";

import AdminPartnersGallery from "@/components/AdminPanel/AdminPartnersGallery";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Cards: NextPage = () => {
  return (
    <AdminLayout title="Partners">
      <RoutingComponent routes={["Категорії", "Лого партнерів"]} />
      <AdminPartnersGallery />
    </AdminLayout>
  );
};

export default Cards;
