import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { IModal } from "@/types";
import { Global } from "@emotion/react";
import {
  CloseIconWrapper,
  LogoWrapper,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "./Modal.styled";
import closeIcon from "../../assets/icons/close.svg";
import logo from "/public/images/logo.png";

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
        <>
          <ModalWrapper>
            <ModalHeader>
              <LogoWrapper>
                <Image
                  fill
                  src={logo}
                  alt="logo"
                  sizes="(min-width: 1440px) 241px, (min-width: 834px) 97px, 117px"
                />
              </LogoWrapper>
              <CloseIconWrapper>
                <Image
                  fill
                  src={closeIcon}
                  alt="close icon"
                  onClick={closeModalHendler}
                />
              </CloseIconWrapper>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter />
          </ModalWrapper>
          <Global
            styles={{
              html: {
                overflow: "hidden",
              },
            }}
          />
        </>,
        modalRootRef.current,
      )
    : null;
};

export default Modal;
