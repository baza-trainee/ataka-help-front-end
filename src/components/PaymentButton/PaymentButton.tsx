import { FC, useEffect, useState } from "react";

import { Button } from "./PaymentButton.styled";
import Modal from "../Modal";
import PaymentModal from "../PaymentModal";
import axios from "axios";
import CryptoJS from "crypto-js";

const PaymentButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [hostname, setHostname] = useState("");

  // useEffect(() => {

  //   if (typeof window !== "undefined") {
  //     setHostname(window.location.hostname);
  //   }
  // }, []);
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const merchantAccount = "ataka_help_vercel_app";
  const merchantDomainName = "ataka-help.vercel.app";
  const merchantTransactionSecureType = "AUTO";
  const orderReference = Date.now().toString();
  const orderDate = Date.now();
  const amount = 10;
  const currency = "UAH";
  const productName = ["Ataka Help support"];
  const productCount = [1];
  const productPrice = [10];

  const onClickHandler = async () => {
    event?.preventDefault();
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
    const wordArray = CryptoJS.enc.Utf8.parse(message);
    const hash = CryptoJS.HmacMD5(
      wordArray,
      `${process.env.NEXT_PUBLIC_WAY_FOR_PAY_KEY}`,
    ).toString();

    //TODO: return url
    const paymentData: any = {
      transactionType: "CREATE_INVOICE",
      merchantAccount,
      merchantDomainName,
      apiVersion: 1,
      orderReference,
      orderDate,
      amount,
      currency,
      productName,
      productCount,
      productPrice,
      merchantSignature: hash,
    };

    try {
      const response = await axios.post(
        "https://api.wayforpay.com/api",
        paymentData,
      );
      console.log(response);
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      <form onSubmit={onClickHandler}>
        <Button data-testid="PaymentButton">Фондувати</Button>
      </form>
      {/* {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <PaymentModal />
        </Modal>
      )} */}
    </>
  );
};

export default PaymentButton;
