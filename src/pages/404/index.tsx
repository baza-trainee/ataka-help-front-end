import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import NotFound from "@/components/NotFound";

import { NotFoundPagePropsType } from "@/types/pages";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const Page404: NextPage<NotFoundPagePropsType> = ({ contacts, report }) => {
  return (
    <UserLayout title="404" contacts={contacts} report={report}>
      <NotFound />
    </UserLayout>
  );
};

export default Page404;
