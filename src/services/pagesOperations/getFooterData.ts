import { getContacts } from "../getContacts";
import { getReport } from "../getReport";

export const getFooterData = async () => {
  try {
    const contacts = await getContacts();
    const report = await getReport();
    return { props: { contacts, report } };
  } catch (error) {
    return { props: { contacts: {}, report: {} } };
  }
};
