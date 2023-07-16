import type { NextPage } from "next";
import { useRouter } from "next/router";

import PartnerForm from "@/components/AdminPanel/PartnerForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Form: NextPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/admin/partners");
  };

  return (
    <AdminLayout title="Партнери">
      <RoutingComponent
        routes={["Категорії", "Лого партнерів", "Додати лого партнера"]}
        isForm
        onClick={onClickHandler}
      />
      <PartnerForm />
    </AdminLayout>
  );
};

export default Form;
