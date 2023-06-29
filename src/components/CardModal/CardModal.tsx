import { FC } from "react";
import {
  ItemTextStyled,
  ListContainer,
  ListTextStyled,
  TextStyled,
} from "./CardModal.styled";

interface CardModalProps {
  description: string[];
}

const CardModal: FC<CardModalProps> = ({ description }) => {
  return (
    <ListContainer>
      <ListTextStyled>
        {description.map((text, idx) => (
          <ItemTextStyled key={idx}>
            <TextStyled>{text}</TextStyled>
          </ItemTextStyled>
        ))}
      </ListTextStyled>
    </ListContainer>
  );
};

export default CardModal;
