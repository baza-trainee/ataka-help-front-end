import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { IncomingForm } from "formidable";

import {
  ImageContainer,
  PaymentContainer,
  PaymentSection,
  Title,
} from "../../components/PaymentModal/PaymentModal.styled";
import {
  CloseIconWrapper,
  LogoWrapper,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "../../components/Modal/Modal.styled";
import closeIcon from "public/icons/close.svg";

export const getServerSideProps = async (context: any) => {
  const form = new IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(context.req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err);
        return resolve({ props: { data: null } });
      }

      const data = fields;

      resolve({ props: { data } });
    });
  });
};
type ReturnPageProps = {
  [x: string]: any;
  reasonCode: string[];
};
const Return: NextPage<ReturnPageProps> = data => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/");
  };

  return (
    <ModalWrapper>
      <ModalHeader>
        <LogoWrapper>
          <Image
            fill
            src={"/images/logo.svg"}
            alt="logo"
            sizes="(min-width: 1440px) 241px, (min-width: 834px) 97px, 117px"
          />
        </LogoWrapper>
        <CloseIconWrapper>
          <Image
            fill
            src={closeIcon}
            alt="close icon"
            onClick={onClickHandler}
          />
        </CloseIconWrapper>
      </ModalHeader>
      <ModalBody>
        <PaymentSection>
          {data?.data?.reasonCode?.[0] === "1100" ? (
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
          ) : (
            <Title>
              Не вдалося здійснити оплату. Будь ласка, переконайтеся в
              правильності введення параметрів і спробуйте ще.
            </Title>
          )}
        </PaymentSection>
      </ModalBody>
      <ModalFooter />
    </ModalWrapper>
  );
};

export default Return;
