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
import { useForm } from "react-hook-form";
import axios from "axios";

const WFPModal = () => {
  // const [price, setPrice] = useState("");
  // console.log(price);
  // const changeValue = (value: string) => {
  //   setPrice(value);
  // };
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      merchantAccount: process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT,
      merchantAuthType: "SimpleSignature",
      merchantDomainName: "ataka-help.vercel.app",
      returnUrl: "https://ataka-help.vercel.app/return",
      orderReference: Date.now().toString(),
      orderDate: Date.now().toString(),
      amount: "",
      currency: "UAH",
      "productName[]": ["Ataka Help Support"],
      "productCount[]": ["1"],
      "productPrice[]": [""],
      merchantSignature: "",
    },
  });

  const onSubmitHandler = async (data: any) => {
    const signatureData = CryptoJS.enc.Utf8.parse(
      [
        data["merchantAccount"],
        data["merchantDomainName"],
        data["orderReference"],
        data["orderDate"],
        data["amount"],
        data["currency"],
        ...data["productName[]"],
        ...data["productCount[]"],
        ...data["productPrice[]"],
      ].join(";"),
    );
    const merchantSignature = CryptoJS.HmacMD5(
      signatureData,
      `${process.env.NEXT_PUBLIC_WAY_FOR_PAY_KEY}`,
    ).toString();
    const paymentData = {
      merchantAccount: data["merchantAccount"],
      merchantDomainName: data["merchantDomainName"],
      merchantAuthType: data["merchantAuthType"],
      orderReference: data["orderReference"],
      orderDate: data["orderDate"],
      amount: data["amount"],
      currency: data["currency"],
      "productName[]": data["productName[]"],
      "productCount[]": data["productCount[]"],
      "productPrice[]": [data["amount"]],
      returnUrl: data["returnUrl"],
      merchantSignature,
    };
    console.log(paymentData);
    try {
      const response = await axios.post(
        "https://secure.wayforpay.com/pay",
        paymentData,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // const merchantAccount = process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT;
  // const merchantDomainName = "ataka-help.vercel.app";
  // const orderReference = Date.now().toString();
  // const orderDate = Date.now().toString();
  // const amount = price;
  // const currency = "UAH";
  // const productName = ["Ataka Help Support"];
  // const productCount = ["1"];
  // const productPrice = [price];
  // const message = [
  //   merchantAccount,
  //   merchantDomainName,
  //   orderReference,
  //   orderDate,
  //   amount,
  //   currency,
  //   ...productName,
  //   ...productCount,
  //   ...productPrice,
  // ].join(";");
  // const wordArray = CryptoJS.enc.Utf8.parse(message);
  // const hash = CryptoJS.HmacMD5(
  //   wordArray,
  //   `${process.env.NEXT_PUBLIC_WAY_FOR_PAY_KEY}`,
  // ).toString();

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
          <Value onClick={() => setValue("amount", "50")}>50 UAH</Value>
          <Value onClick={() => setValue("amount", "100")}>100 UAH</Value>
          <Value onClick={() => setValue("amount", "200")}>200 UAH</Value>
        </Container>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          // method="post"
          // action="https://secure.wayforpay.com/pay"
          // accept-сharset="utf-8"
        >
          <HiddenInput
            {...register("merchantAccount")}
            // name="merchantAccount"
            // value={`${process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT}`}
            // readOnly
          />
          <HiddenInput
            {...register("merchantAuthType")}
            // name="merchantAuthType"
            // value="SimpleSignature"
            // readOnly
          />
          <HiddenInput
            {...register("merchantDomainName")}
            // name="merchantDomainName"
            // value="ataka-help.vercel.app"
            // readOnly
          />
          <HiddenInput
            {...register("returnUrl")}
            // name="returnUrl"
            // value="https://ataka-help.vercel.app/return"
            // readOnly
          />
          <HiddenInput
            // name="merchantSignature"
            // value={hash}
            // readOnly
            {...register("merchantSignature")}
          />
          <HiddenInput
            // name="orderReference"
            // value={orderReference}
            // readOnly
            {...register("orderReference")}
          />
          <HiddenInput
            // name="orderDate"
            // value={orderDate}
            // readOnly
            {...register("orderDate")}
          />
          <Input
            {...register("amount")}
            // name="amount"
            // value={price}
            // onChange={e => changeValue(e.target.value)}
            placeholder="Інша сума"
            type="number"
            min={1}
            max={10000}
            required
          />
          <HiddenInput
            // name="currency"
            // value="UAH"
            // readOnly
            {...register("currency")}
          />
          <HiddenInput
            {...register("productName[]")}
            // name="productName[]"
            // value="Ataka Help Support"
            // readOnly
          />
          <HiddenInput
            // name="productPrice[]"
            // value={price}
            // readOnly
            {...register("productPrice[]")}
          />
          <HiddenInput
            // name="productCount[]"
            // value="1"
            // readOnly
            {...register("productCount[]")}
          />
          <Button type="submit">Фондувати</Button>
        </form>
      </Wrapper>
    </FlexContainer>
  );
};
export default WFPModal;
