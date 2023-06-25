import { getContacts } from "../adminContactsOperations";
import { getReport } from "../adminReportOperations";

export const getFooterData = async () => {
  try {
    const contacts = await getContacts();
    const report = await getReport();
    return { props: { contacts, report }, revalidate: 120 };
  } catch (error) {
    return { props: { contacts: {}, report: {} } };
  }
};
