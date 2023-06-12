import { FC, Key } from "react";
import { Container, Section } from "../Common";
import Card from "../Card/Card";
import { ListCardStyled, TitleListStyled } from "./CardsGallery.styled";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { Cards } from "@/types";

// const cards = [
//   {
//     id: 1,
//     thumb: "/images/picture.png",
//     alt: "picture",
//     title:
//       "Я бачу дії і повідомлення зі свого акаунту в Facebook, які я не виконував",
//     description: [
//       "Це ознака злому твого акаунту, ти став ціллю шахрая. ",
//       "Вийди з акаунту, натиснувши вгорі з правої сторони колесико.",
//       "Зміни пароль.",
//       "Оскільки акаунт в ФБ прив`язаний до електронної пошти, перевір, чи заходиш ти до своєї поштової скриньки. Краще також зміни пароль до електронної пошти.",
//       "Увага! Не використовуй один пароль для цих трьох дій. Якщо використовуєш цифри в паролях, використай бодай одну різну (або літеру) в трьох паролях.",
//       "Підключи двохфакторну аутентифікацію – двокрокову перевірку того, що акаунтом користуєшся саме ти. Найпростіший спосіб – додати спосіб перевірки – СМС на твій телефон. Так першим порогом перевірки буде пароль, другим СМС, що значно погіршує життя шахрая.",
//     ],
//   },
//   {
//     id: 2,
//     thumb: "/images/picture.png",
//     alt: "picture",
//     title:
//       "Мені телефонують із банку з повідомленням, що з моїм рахунком відбуваються якісь дії",
//     description: [
//       "Незалежно від теми, не продовжуй цю розмову. Не перепитуй посади чи прізвища того, з ким розмовляєш – це не має сенсу. ",
//       "Перепроси, попередь, що ти кладеш трубку і перетелефонуєш сам через хвилину. Не пояснюй причин. ",
//       "Відключись від розмови, передзвони до свого банку за загальним номером, вказаним на сторінці банку, і повідом про цей випадок. Так ти надаш банку попередження про злочинну активність стосовно їх клієнтів, і банк виконає необхідні дії стосовно захисту твого рахунку.",
//     ],
//   },
//   {
//     id: 3,
//     thumb: "/images/picture.png",
//     alt: "picture",
//     title: "Я оформив нову картку банку зі стандартним паролем 1234",
//     description: [
//       "Будь ласка, обов`язково зміни його на нові чотири цифри.",
//       "Пригадай емоційно важливу для себе дату – день вашого весілля або народження онука або коли ти нарешті отримав першу роботу в ІТ. Використай день та місяць як пароль.",
//       "Не використовуй свою дату народження – це персональна інформація, яка може бути викрадена разом з номером картки. ",
//     ],
//   },
//   {
//     id: 4,
//     thumb: "/images/picture.png",
//     alt: "picture",
//     title:
//       "Отримала незвичного листа від директора з наказом перевести кошти на картку",
//     description: [
//       "Ретельно перевір поштову адресу, з якої надійшов лист – буквально до літери і розміщення крапки в адресі. Якщо вони не співпадають з звичайною поштою директора – це фішинг, виманювання коштів через авторитет твого керівника і поспіх.",
//       "Обговори подібну ситуацію з керівництвом на початку роботи. Можна домовитись про кодове слово для критичних ситуацій чи терміновість, наприклад: «Так, дійте». Не виконуйте платежу без кодового слова.",
//     ],
//   },
//   {
//     id: 5,
//     thumb: "/images/picture.png",
//     alt: "picture",
//     title:
//       "Покупець в моєму інтернет магазині просить продиктувати реквізити для переоплати",
//     description: [
//       "Після диктовки номеру рахунку «покупець» попросить у тебе термін дії картки і CVV. Ти можеш необережно продиктувати йому всі дані – не роби цього.",
//       "Пообіцяй, що зарезервуєш «покупцю» обраний товар, і запевни його, що можна спокійно зробити передоплату, коли у нього настане така можливість.",
//       "Запиши номер телефону, з якого тобі телефонували. Проконтролюй, чи з`явиться покупець з таким номером.",
//       "Використай для спілкування з покупцями окремий номер телефону і не використовуй для масових розмов номер, до якого прив`язані банківські реквізити.",
//     ],
//   },
//   {
//     id: 6,
//     thumb: "/images/picture.png",
//     alt: "picture",
//     title: "Дзвонять і кажуть, що помилково поповнили мій телефон",
//     description: [
//       "Просять перерахувати суму дещо більше твого щомісячного тарифу на банківську карту або навіть на номер телефону.",
//       "Попроси надіслати тобі СМС з номером, на якій треба повернути кошти, і суму. Перепроси і відключайся від розмови без пояснень причин.",
//       "Можеш почекати зарахування коштів за мобільний зв`язок, але скоріш за все його не буде.",
//     ],
//   },
// ];

const CardsGallery: FC<Cards> = ({ cards, total }) => {
  return (
    <Section>
      <Container>
        <TitleListStyled textAlignM="center">Інциденти</TitleListStyled>
        <ListCardStyled>
          {cards?.map(
            (card: {
              id: string;
              thumb: string;
              title: string;
              alt: string;
              description: string[];
            }) => (
              <Card
                key={card.id}
                thumb={`${process.env.NEXT_PUBLIC_API_URL}/${card.thumb}`}
                title={card.title}
                alt={card.alt}
                description={card.description}
              />
            ),
          )}
        </ListCardStyled>
        <LoadMoreButton />
      </Container>
    </Section>
  );
};

export default CardsGallery;
