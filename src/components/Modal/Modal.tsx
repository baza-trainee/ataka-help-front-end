import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IModal } from "@/types";
import { Global } from "@emotion/react";
import { Backdrop, CloseIcon, Wrapper } from "./Modal.styled";
import closeIcon from "../../assets/x-lg.svg";

const Modal: FC<IModal> = ({ children, setIsModalOpen }) => {
  const [mounted, setMounted] = useState(false);
  const modalRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    modalRootRef.current = document.getElementById("modal-root");
    setMounted(true);
  }, []);

  const closeModalHendler = () => {
    setIsModalOpen(false);
  };

  return mounted && modalRootRef.current
    ? createPortal(
        <Backdrop>
          <Wrapper>
            <CloseIcon
              src={closeIcon}
              alt="close icon"
              onClick={closeModalHendler}
            />
            {children}
          </Wrapper>
          <Global
            styles={{
              html: {
                overflow: "hidden",
              },
            }}
          />
        </Backdrop>,
        modalRootRef.current,
      )
    : null;
};

export default Modal;
