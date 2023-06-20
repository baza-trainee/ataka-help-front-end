import { FC, useState } from "react";

import { Cards, ICard } from "@/types";

import { Container, Section } from "../Common";
import Card from "../Card/Card";
import { ListCardStyled, TitleListStyled } from "./CardsGallery.styled";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

const CardsGallery: FC<Cards> = ({ cards, total }) => {
  const [page, setPage] = useState(2);
  const [shownCards, setShownCards] = useState(cards.slice(0, 6));

  const onClickHandler = () => {
    setPage(prev => prev + 1);
    setShownCards(cards.slice(0, page * 6));
  };

  return (
    <Section>
      <Container>
        <TitleListStyled textAlignM="center">Інциденти</TitleListStyled>
        <ListCardStyled>
          {shownCards?.map((card: ICard) => (
            <Card
              key={card.id}
              thumb={`${process.env.NEXT_PUBLIC_API_URL}/${card.thumb}`}
              title={card.title}
              alt={card.alt}
              description={card.description}
            />
          ))}
        </ListCardStyled>
        {total > 3 && total > shownCards.length && (
          <LoadMoreButton onClick={onClickHandler} />
        )}
      </Container>
    </Section>
  );
};

export default CardsGallery;
