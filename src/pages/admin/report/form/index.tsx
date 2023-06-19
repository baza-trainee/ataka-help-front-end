import type { NextPage } from "next";
import ReportForm from "@/components/AdminPanel/ReportForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import { Section } from "@/components/AdminPanel/CommonFormStyles";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import { useRouter } from "next/router";

const Form: NextPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/admin/report");
  };
  return (
    <AdminLayout>
      <Section>
        <RoutingComponent
          routes={["Категорії", "Звітність", "Додати звітність"]}
          isForm
          onClick={onClickHandler}
        />
        <ReportForm />
      </Section>
    </AdminLayout>
  );
};

export default Form;
