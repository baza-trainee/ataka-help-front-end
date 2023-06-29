import { getContacts } from "../adminContactsOperations";
import { getPartners } from "../adminPartnersOperations";
import { getReport } from "../adminReportOperations";
import { getSlider } from "../adminSliderOperations";

export const getAboutPageData = async () => {
  try {
    const contacts = await getContacts();
    const report = await getReport();
    const partners = await getPartners();
    const slider = await getSlider();
    return { props: { contacts, report, slider, partners }, revalidate: 120 };
  } catch (error) {
    return { props: { contacts: {}, report: {}, slider: {}, partners: {} } };
  }
};
