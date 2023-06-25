import { getCards } from "../adminCardsOperations";
import { getContacts } from "../adminContactsOperations";
import { getReport } from "../adminReportOperations";
import { getSlider } from "../adminSliderOperations";

export const getHomePageData = async () => {
  try {
    const contacts = await getContacts();
    const report = await getReport();
    const cards = await getCards();
    const slider = await getSlider();
    return { props: { contacts, report, cards, slider }, revalidate: 120 };
  } catch (error) {
    return { props: { contacts: {}, report: {}, cards: {}, slider: {} } };
  }
};
