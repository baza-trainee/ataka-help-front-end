import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import ReportSection from "@/components/AdminPanel/ReportSection";
import AdminLayout from "@/components/AdminPanel/AdminLayout";
import { Section } from "@/components/AdminPanel/CommonFormStyles";
import RoutingComponent from "@/components/AdminPanel/RoutingComponent";

const Report: NextPage = () => {
  return (
    <AdminLayout>
      <Section>
        <RoutingComponent routes={["Категорії", "Звітність"]} />
        <ReportSection />
      </Section>
    </AdminLayout>
  );
};

export default Report;
