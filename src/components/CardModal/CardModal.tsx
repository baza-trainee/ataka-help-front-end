import { FC } from "react";
import { ItemTextStyled, ListTextStyled, TextStyled } from "./CardModal.styled";

const actions = [
  "Ретельно перевір поштову адресу, з якої надійшов лист – буквально до літери і розміщення крапки в адресі. Якщо вони не співпадають з звичайною поштою директора – це фішинг, виманювання коштів через авторитет твого керівника і поспіх.",
  "Обговори подібну ситуацію з керівництвом на початку роботи. Можна домовитись про кодове слово для критичних ситуацій чи терміновість, наприклад: «Так, дійте». Не виконуйте платежу без кодового слова.",
];

const CardModal: FC = () => {
  return (
    <ListTextStyled>
      {actions.map((action, idx) => (
        <ItemTextStyled key={idx}>
          <TextStyled>{`${idx + 1}. ${action}`}</TextStyled>
        </ItemTextStyled>
      ))}
    </ListTextStyled>
  );
};

export default CardModal;
