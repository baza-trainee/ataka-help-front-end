import { FC, useState } from "react";
import { IFileOpenLink } from "@/types";
import Modal from "../Modal/Modal";
import { Iframe, Link } from "./FileOpenLink.styled";

const FileOpenLink: FC<IFileOpenLink> = ({ text, path, td }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickTextHandler = () => setIsModalOpen(true);

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <Iframe src={`${path}#view=fitH`}></Iframe>
        </Modal>
      )}
      <Link onClick={clickTextHandler} style={{textDecoration: td}}>{text}</Link>
    </>
  );
};

export default FileOpenLink;
