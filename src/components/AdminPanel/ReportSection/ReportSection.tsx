import useSWR from "swr";
import Link from "next/link";

import { getReportAdmin } from "@/services/adminReportOperations";
import { deleteReport } from "@/services";
import { Section } from "../CommonFormStyles";
import PDFIcon from "../PDFIcon";
import {
  AddReport,
  Bin,
  Button,
  DeleteButton,
  Edit,
  IconWrapper,
  Report,
  StyledIcon,
  StyledLink,
  Text,
} from "./ReportSection.styled";

const fetcher = async () => {
  const data = await getReportAdmin();
  return data;
};

const ReportSection = () => {
  const { data, error } = useSWR("report", fetcher);
  console.log(data);

  const deleteDocument = async () => {
    try {
      const response = await deleteReport();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Section>
      {data && (
        <Report>
          <PDFIcon />
          <Button type="button">Звітність</Button>
          <StyledLink href={"/admin/report/form"}>
            <Edit />
          </StyledLink>
          <DeleteButton onClick={deleteDocument}>
            <Bin />
          </DeleteButton>
        </Report>
      )}

      {error && (
        <AddReport>
          <IconWrapper>
            <Link href={"/admin/report/form"}>
              <StyledIcon />
              <Text>Додати звітність</Text>
            </Link>
          </IconWrapper>
        </AddReport>
      )}
    </Section>
  );
};

export default ReportSection;
