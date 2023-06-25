import useSWR from "swr";
import Link from "next/link";
import { useSWRConfig } from "swr";

import { deleteReport, getReport } from "@/services";
import Loader from "@/components/Loader";
import PDFIcon from "../PDFIcon";
import {
  AddReport,
  Bin,
  DeleteButton,
  Edit,
  IconWrapper,
  LinkPDF,
  Report,
  StyledIcon,
  StyledLink,
  Text,
} from "./ReportSection.styled";

const ReportSection = () => {
  const { mutate } = useSWRConfig();
  const { data, isLoading } = useSWR("report", getReport);

  const deleteDocument = async () => {
    try {
      await deleteReport();
      mutate("report", undefined, { revalidate: false });
    } catch (e) {
      return;
    }
  };

  if (isLoading) return <Loader />;

  return (
    <>
      {data ? (
        <Report>
          <PDFIcon />
          <LinkPDF
            href={`${process.env.NEXT_PUBLIC_API_URL}/${data.file}`}
            target="_blank"
          >
            Звітність
          </LinkPDF>
          <StyledLink href={"/admin/report/form"}>
            <Edit />
          </StyledLink>
          <DeleteButton onClick={deleteDocument}>
            <Bin />
          </DeleteButton>
        </Report>
      ) : (
        <AddReport>
          <IconWrapper>
            <Link href={"/admin/report/form"}>
              <StyledIcon />
              <Text>Додати звітність</Text>
            </Link>
          </IconWrapper>
        </AddReport>
      )}
    </>
  );
};

export default ReportSection;
