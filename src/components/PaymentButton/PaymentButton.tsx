import { FC, useState } from "react";

import { Button } from "./PaymentButton.styled";
import Modal from "../Modal";
import PaymentModal from "../PaymentModal";
import axios from "axios";
import CryptoJS from "crypto-js";

const PaymentButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const merchantAccount = "ataka_help_vercel_app";
  const merchantDomainName = window.location.hostname;
  const merchantTransactionSecureType = "AUTO";

  const orderReference = Date.now().toString();
  const orderDate = Date.now();
  const amount = 10;
  const currency = "UAH";
  const productName = ["Ataka Help support"];
  const productCount = [1];
  const productPrice = [10];

  const onClickHandler = async () => {
    const message = [
      merchantAccount,
      merchantDomainName,
      orderReference,
      orderDate,
      amount,
      currency,
      ...productName,
      ...productCount,
      ...productPrice,
    ].join(";");
    const hash = CryptoJS.HmacMD5(
      message,
      `${process.env.NEXT_PUBLIC_WAY_FOR_PAY_KEY}`,
    ).toString();

    const paymentData: any = {
      merchantAccount,
      merchantDomainName,
      merchantTransactionSecureType,
      merchantSignature: hash,
      // returnUrl: "",
      orderReference,
      orderDate,
      amount,
      currency,
      productName,
      productCount,
      productPrice,
    };
    try {
      const response = await axios.post(
        "https://secure.wayforpay.com/pay",
        paymentData,
      );
      console.log(response);
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      <Button
        onClick={onClickHandler}
        type="button"
        data-testid="PaymentButton"
      >
        Фондувати
      </Button>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <PaymentModal />
        </Modal>
      )}
    </>
  );
};

export default PaymentButton;
