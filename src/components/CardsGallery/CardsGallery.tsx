import { FC } from "react";
import { Container, Section } from "../Common";
import Card from "../Card/Card";
import { ListCardStyled, TitleListStyled } from "./CardsGallery.styled";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

const cards = [
  {
    id: 1,
    image: "/images/picture.png",
    text: "Отримала незвичного листа від директора з наказом перевести кошти на картку",
  },
  {
    id: 2,
    image: "/images/picture.png",
    text: "Отримала незвичного листа від директора з наказом перевести кошти на картку",
  },
  {
    id: 3,
    image: "/images/picture.png",
    text: "Отримала незвичного листа від директора з наказом перевести кошти на картку",
  },
  {
    id: 4,
    image: "/images/picture.png",
    text: "Отримала незвичного листа від директора з наказом перевести кошти на картку",
  },
  {
    id: 5,
    image: "/images/picture.png",
    text: "Отримала незвичного листа від директора з наказом перевести кошти на картку",
  },
  {
    id: 6,
    image: "/images/picture.png",
    text: "Отримала незвичного листа від директора з наказом перевести кошти на картку",
  },
];

const CardsGallery: FC = () => {
  return (
    <Section>
      <Container>
        <TitleListStyled textAlignM="center">Інциденти</TitleListStyled>
        <ListCardStyled>
          {cards.map(card => (
            <Card key={card.id} image={card.image} text={card.text} />
          ))}
        </ListCardStyled>
        <LoadMoreButton />
      </Container>
    </Section>
  );
};

export default CardsGallery;
