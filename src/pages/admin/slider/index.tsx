import type { NextPage } from "next";

import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import SliderGallery from "@/components/AdminPanel/SliderGallery";

const Slider: NextPage = () => {
  return (
    <AdminLayout title="Слайдер">
      <RoutingComponent routes={["Категорії", "Слайдер"]} />
      <SliderGallery />
    </AdminLayout>
  );
};

export default Slider;
