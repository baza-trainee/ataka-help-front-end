import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    let data = sessionStorage.getItem(
      `${process.env.NEXT_PUBLIC_SESSION_STORAGE_KEY}`,
    );
    if (!data || data !== `${process.env.NEXT_PUBLIC_SESSION_STORAGE_VALUE}`) {
      router.push("/login");
    } else {
      router.push("/admin/cards");
    }
  }, [router]);

  return <></>;
};

export default Admin;
