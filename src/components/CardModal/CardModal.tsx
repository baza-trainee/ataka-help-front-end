import { FC } from "react";
import { ItemTextStyled, ListTextStyled, TextStyled } from "./CardModal.styled";

interface CardModalProps {
  description: string[];
}

const CardModal: FC<CardModalProps> = ({ description }) => {
  return (
    <ListTextStyled>
      {description.map((text, idx) => (
        <ItemTextStyled key={idx}>
          {idx + 1}
          <TextStyled>{text}</TextStyled>
        </ItemTextStyled>
      ))}
    </ListTextStyled>
  );
};

export default CardModal;
