import { FC } from "react";

import { CardModalProps } from "@/types";
import { ItemTextStyled, ListTextStyled, TextStyled } from "./CardModal.styled";
import { Container } from "../Common";

const CardModal: FC<CardModalProps> = ({ description }) => {
  return (
    <Container>
      <ListTextStyled>
        {description.map((text, idx) => (
          <ItemTextStyled key={idx}>
            {idx + 1}
            <TextStyled>{text}</TextStyled>
          </ItemTextStyled>
        ))}
      </ListTextStyled>
    </Container>
  );
};

export default CardModal;
