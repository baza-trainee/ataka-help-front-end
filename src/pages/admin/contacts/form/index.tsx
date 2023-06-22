import type { NextPage } from "next";
import { useRouter } from "next/router";

import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import ContactForm from "@/components/AdminPanel/ContactForm";

const Form: NextPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/admin/contacts");
  };

  return (
    <AdminLayout>
      <RoutingComponent
        routes={["Категорії", "Контакти", "Редагувати"]}
        isForm
        onClick={onClickHandler}
      />
      <ContactForm />
    </AdminLayout>
  );
};

export default Form;
