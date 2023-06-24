import { getCards } from "../adminCardsOperations";
import { getContacts } from "../adminContactsOperations";
import { getReport } from "../adminReportOperations";

export const getHomePageData = async () => {
  try {
    const contacts = await getContacts();
    const report = await getReport();
    const cards = await getCards();
    return { props: { contacts, report, cards }, revalidate: 120 };
  } catch (error) {
    return { props: { contacts: {}, report: {}, cards: {} } };
  }
};
