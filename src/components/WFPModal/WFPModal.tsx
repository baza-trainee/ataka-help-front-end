import axios from "axios";
import CryptoJS from "crypto-js";
import Image from "next/image";
import { useState } from "react";
import {
  Container,
  FlexContainer,
  HiddenInput,
  Input,
  Value,
  Wrapper,
  ImageContainer,
  Button,
} from "./WFPModal.styled";

const WFPModal = () => {
  const [price, setPrice] = useState("");

  const changeValue = (value: string) => {
    setPrice(value);
  };
  const merchantAccount = process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT;
  const merchantDomainName = "ataka-help.vercel.app";
  const orderReference = Date.now().toString();
  const orderDate = Date.now().toString();
  const amount = price;
  const currency = "UAH";
  const productName = ["Ataka Help Support"];
  const productCount = ["1"];
  const productPrice = [price];
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

  return (
    <FlexContainer>
      <ImageContainer>
        <Image
          src={`/images/7200951_30754-min.jpg`}
          alt="Hand with love"
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width: 320px) 361px, (min-width: 768px) 560px, (min-width: 1440px) 655px"
        />
      </ImageContainer>
      <Wrapper>
        <Container>
          <Value onClick={() => setPrice("50")}>50 UAH</Value>
          <Value onClick={() => setPrice("100")}>100 UAH</Value>
          <Value onClick={() => setPrice("200")}>200 UAH</Value>
        </Container>
        <form
          method="post"
          action="https://secure.wayforpay.com/pay"
          accept-сharset="utf-8"
        >
          <HiddenInput
            name="merchantAccount"
            value={`${process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT}`}
            readOnly
          />
          <HiddenInput
            name="merchantAuthType"
            value="SimpleSignature"
            readOnly
          />
          <HiddenInput
            name="merchantDomainName"
            value="ataka-help.vercel.app"
            readOnly
          />
          <HiddenInput name="merchantSignature" value={hash} readOnly />
          <HiddenInput
            name="orderReference"
            value={Date.now().toString()}
            readOnly
          />
          <HiddenInput name="orderDate" value={Date.now()} readOnly />
          <Input
            name="amount"
            value={price}
            onChange={e => changeValue(e.target.value)}
            placeholder="Інша сума"
            type="number"
            min={1}
            max={10000}
            required
          />
          <HiddenInput name="currency" value="UAH" readOnly />
          <HiddenInput
            name="productName[]"
            value="Ataka Help Support"
            readOnly
          />
          <HiddenInput name="productPrice[]" value={price} readOnly />
          <HiddenInput name="productCount[]" value="1" readOnly />
          <Button type="submit">Фондувати</Button>
        </form>
      </Wrapper>
    </FlexContainer>
  );
};
export default WFPModal;
