import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IModal } from "@/types";
import { Global } from "@emotion/react";
import { Backdrop, CloseIcon, Wrapper } from "./Modal.styled";
import closeIcon from "../../assets/x-lg.svg";

const Modal: FC<IModal> = ({ children, setIsModalOpen }) => {
  const [mounted, setMounted] = useState(false);
  const modalRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const pressEscCloseModalHandler = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setIsModalOpen(false);
      }
    };

    modalRootRef.current = document.getElementById("modal-root");
    setMounted(true);
    document.addEventListener("keydown", pressEscCloseModalHandler);

    return () =>
      document.removeEventListener("keydown", pressEscCloseModalHandler);
  }, [setIsModalOpen]);

  const closeModalHendler = () => {
    setIsModalOpen(false);
  };

  const onBackdropClickHankler = (event: MouseEvent) => {
    if (event.currentTarget === event.target) {
      setIsModalOpen(false);
    }
  };

  return mounted && modalRootRef.current
    ? createPortal(
        <Backdrop onClick={onBackdropClickHankler}>
          <Wrapper>
            <CloseIcon
              src={closeIcon}
              width={20}
              height={20}
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
        modalRootRef.current
      )
    : null;
};

export default Modal;
