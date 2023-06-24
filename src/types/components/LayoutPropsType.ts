import { ReactNode } from "react";

import { Contacts } from "../contacts/Contacts";
import { Report } from "../report/Report";

export type LayoutPropsType = {
  title: string;
  children: ReactNode;
  contacts: Contacts;
  report: Report;
};
