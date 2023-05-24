import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import NotFound from "@/components/NotFound";

const Page404: NextPage = () => {
  return (
    <UserLayout title="page 404">
      <NotFound />
    </UserLayout>
  );
};

export default Page404;
