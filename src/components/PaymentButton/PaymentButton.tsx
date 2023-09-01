import { FC, useState } from "react";

import { Button } from "./PaymentButton.styled";
import Modal from "../Modal";
import WFPModal from "../WFPModal/WFPModal";

const PaymentButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button onClick={openModal}>Фондувати</Button>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <WFPModal />
        </Modal>
      )}
    </>
  );
};

export default PaymentButton;
