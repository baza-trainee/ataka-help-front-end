import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import NotFound from "@/components/NotFound";

import { NotFoundPagePropsType } from "@/types/PagesTypes";
import { getFooterData } from "@/services/pagesOperations";

export const getStaticProps = async () => {
  const result = await getFooterData();
  return result;
};

const Page404: NextPage<NotFoundPagePropsType> = ({ contacts, report }) => {
  return (
    <UserLayout title="page 404" contacts={contacts} report={report}>
      <NotFound />
    </UserLayout>
  );
};

export default Page404;
