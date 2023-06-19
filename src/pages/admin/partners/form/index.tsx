import type { NextPage } from "next";

import PartnerForm from "@/components/AdminPanel/PartnerForm";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import { Section } from "@/components/AdminPanel/CommonFormStyles";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import { useRouter } from "next/router";

const Form: NextPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/admin/partners");
  };

  return (
    <AdminLayout>
      <Section>
        <RoutingComponent
          routes={["Категорії", "Лого партнерів", "Додати лого партнера"]}
          isForm
          onClick={onClickHandler}
        />
        <PartnerForm />
      </Section>
    </AdminLayout>
  );
};

export default Form;
