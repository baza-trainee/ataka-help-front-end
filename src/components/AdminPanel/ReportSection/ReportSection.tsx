import Link from "next/link";
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
  Text,
} from "./ReportSection.styled";

const ReportSection = () => {
  return (
    <Section>
      <Report>
        <PDFIcon />
        <Button type="button">Звітність</Button>
        <Edit />
        <DeleteButton>
          <Bin />
        </DeleteButton>
      </Report>
      <AddReport>
        <IconWrapper>
          <Link href={"/admin/report/form"}>
            <StyledIcon />
            <Text>Додати звітність</Text>
          </Link>
        </IconWrapper>
      </AddReport>
    </Section>
  );
};

export default ReportSection;
