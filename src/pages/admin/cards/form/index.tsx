import type { NextPage } from "next";
import { useRouter } from "next/router";

import CardForm from "@/components/AdminPanel/CardForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Form: NextPage = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/admin/cards");
  };

  return (
    <AdminLayout title="Картки">
      <RoutingComponent
        routes={["Категорії", "Картки", "Додати картку"]}
        isForm
        onClick={onClickHandler}
      />
      <CardForm />
    </AdminLayout>
  );
};

export default Form;
