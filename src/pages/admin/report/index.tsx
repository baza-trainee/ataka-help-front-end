import type { NextPage } from "next";

import ReportSection from "@/components/AdminPanel/ReportSection";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Report: NextPage = () => {
  return (
    <AdminLayout title="Report">
      <RoutingComponent routes={["Категорії", "Звітність"]} />
      <ReportSection />
    </AdminLayout>
  );
};

export default Report;
