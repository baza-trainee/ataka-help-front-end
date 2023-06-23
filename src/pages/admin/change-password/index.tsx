import type { NextPage } from "next";

import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";
import ChangePasswordForm from "@/components/AdminPanel/ChangePasswordForm";

const ChangePasswordPage: NextPage = () => {
  return (
    <section style={{ backgroundColor: "#FBFBFC" }}>
      <AdminLayout>
        <RoutingComponent routes={["Змінити пароль"]} />
        <ChangePasswordForm />
      </AdminLayout>
    </section>
  );
};

export default ChangePasswordPage;
