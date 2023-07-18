import Image from "next/image";

import { ImageContainer, PaymentContainer, Title } from "./PaymentModal.styled";

const PaymentModal = () => {
  return (
    <PaymentContainer>
      <ImageContainer>
        <Image
          src={`/images/payment.png`}
          alt="Hand with sphere"
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width: 320px) 361px, (min-width: 768px) 604px, (min-width: 1280px) 560px, (min-width: 1440px) 655px"
        />
      </ImageContainer>
      <Title>Дякуємо за Вашу підтримку!</Title>
    </PaymentContainer>
  );
};

export default PaymentModal;
