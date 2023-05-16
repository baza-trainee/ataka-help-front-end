import { FC, useState } from "react";
import { IFileOpenLink } from "@/types";
import Modal from "../Modal/Modal";
import { Iframe } from "./FileOpenLink.styled";

const FileOpenLink: FC<IFileOpenLink> = ({ text, path }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickTextHandler = () => setIsModalOpen(true);

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <Iframe src={`${path}#view=fitH`}></Iframe>
        </Modal>
      )}
      <span onClick={clickTextHandler}>{text}</span>
    </>
  );
};

export default FileOpenLink;
