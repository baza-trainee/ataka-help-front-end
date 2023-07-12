import type { NextPage } from "next";
import { useRouter } from "next/router";

import ReportForm from "@/components/AdminPanel/ReportForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Form: NextPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/admin/report");
  };

  return (
    <AdminLayout title="Report">
      <RoutingComponent
        routes={["Категорії", "Звітність", "Додати звітність"]}
        isForm
        onClick={onClickHandler}
      />
      <ReportForm />
    </AdminLayout>
  );
};

export default Form;
