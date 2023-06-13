import { getCards } from "../getCards";
import { getContacts } from "../getContacts";
import { getReport } from "../getReport";

export const getHomePageData = async () => {
  try {
    const contacts = await getContacts();
    const report = await getReport();
    const cards = await getCards();
    return { props: { contacts, report, cards }, revalidate: 120 };
  } catch (error) {
    return { props: { contacts: {}, report: {} } };
  }
};
