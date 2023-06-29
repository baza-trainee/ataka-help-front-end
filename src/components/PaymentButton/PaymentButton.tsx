import { FC } from "react";
import { Button } from "./PaymentButton.styled";

const PaymentButton: FC = () => {
  return <Button data-testid="PaymentButton">Підтримати проєкт</Button>;
};

export default PaymentButton;
