import type { NextPage } from "next";

import CardForm from "@/components/AdminPanel/CardForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import { useRouter } from "next/router";
import { Section } from "@/components/AdminPanel/CommonFormStyles";

const Form: NextPage = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/admin/cards");
  };
  return (
    <AdminLayout>
      <Section>
        <RoutingComponent
          routes={["Категорії", "Картки", "Додати картку"]}
          isForm
          onClick={onClickHandler}
        />
        <CardForm />
      </Section>
    </AdminLayout>
  );
};

export default Form;
