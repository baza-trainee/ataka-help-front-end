import { getContacts } from "../adminContactsOperations";
import { getReport } from "../adminReportOperations";
import { getSlider } from "../adminSliderOperations";

export const getUsefullInfoData = async () => {
  try {
    const contacts = await getContacts();
    const report = await getReport();
    const slider = await getSlider();
    return { props: { contacts, report, slider }, revalidate: 120 };
  } catch (error) {
    return { props: { contacts: {}, report: {}, slider: {} } };
  }
};
