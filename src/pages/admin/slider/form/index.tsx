import type { NextPage } from "next";
import { useRouter } from "next/router";

import SliderForm from "@/components/AdminPanel/SliderForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Form: NextPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/admin/slider");
  };

  return (
    <AdminLayout>
      <RoutingComponent
        routes={["Категорії", "Слайдер", "Додати слайдер"]}
        isForm
        onClick={onClickHandler}
      />
      <SliderForm />
    </AdminLayout>
  );
};

export default Form;
