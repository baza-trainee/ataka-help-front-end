import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/cards");
  }, [router]);

  return <></>;
};

export default Admin;
