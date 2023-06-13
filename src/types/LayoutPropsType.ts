import { ReactNode } from "react";

import { Contacts } from "./Contacts";
import { Report } from "./Report";

export type LayoutPropsType = {
  title: string;
  children: ReactNode;
  contacts: Contacts;
  report: Report;
};
