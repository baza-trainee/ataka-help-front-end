import type { NextPage } from "next";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import { Section } from "@/components/AdminPanel/CommonFormStyles";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import SliderGallery from "@/components/AdminPanel/SliderGallery";

const Slider: NextPage = () => {
  return (
    <AdminLayout>
      <Section>
        <RoutingComponent routes={["Категорії", "Слайдер"]} />
        <SliderGallery />
      </Section>
    </AdminLayout>
  );
};

export default Slider;
