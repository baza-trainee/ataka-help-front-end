import { FC, useState } from "react";

import { Button } from "./PaymentButton.styled";
import Modal from "../Modal";
import PaymentModal from "../PaymentModal";

const PaymentButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button onClick={openModal} type="button">
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
