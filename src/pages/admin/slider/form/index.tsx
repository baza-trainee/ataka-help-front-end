import type { NextPage } from "next";

import SliderForm from "@/components/AdminPanel/SliderForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import { Section } from "@/components/AdminPanel/CommonFormStyles";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import { useRouter } from "next/router";

const Form: NextPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/admin/slider");
  };
  return (
    <AdminLayout>
      <Section>
        <RoutingComponent
          routes={["Категорії", "Слайдер", "Додати слайдер"]}
          isForm
          onClick={onClickHandler}
        />
        <SliderForm />
      </Section>
    </AdminLayout>
  );
};

export default Form;
