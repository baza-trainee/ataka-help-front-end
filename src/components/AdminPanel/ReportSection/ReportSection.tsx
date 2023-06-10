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
    <>
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
          <StyledIcon />
          <Text>Додати звітність</Text>
        </IconWrapper>
      </AddReport>
    </>
  );
};

export default ReportSection;
