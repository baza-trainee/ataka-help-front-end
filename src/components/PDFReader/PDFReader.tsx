import { Document, Page, pdfjs } from "react-pdf";

import Modal from "../Modal/Modal";
import { OpenLink } from "../FileOpenLink/FileOpenLink.styled";
import { useState, FC, SetStateAction, useRef, RefObject } from "react";
import { IFileOpenLink } from "@/types";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button, ButtonContainer, PDFWrapper } from "./PDFReader.styled";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader: FC<IFileOpenLink> = ({
  text,
  path,
  isTextUnderline,
  isCookiesButtonStyles,
  isFooterButtonStyles,
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfWrapperRef = useRef<HTMLDivElement | null>(
    null,
  ) as RefObject<HTMLDivElement>;

  const clickTextHandler = () => {
    setIsModalOpen(true);
  };
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  const myArray =
    numPages !== null
      ? Array.from({ length: numPages }, (_, index) => index + 1)
      : null;

  const onClick = (value: SetStateAction<number>) => {
    setPageNumber(value);
  };

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <PDFWrapper ref={pdfWrapperRef}>
            <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                width={pdfWrapperRef?.current?.getBoundingClientRect()?.width}
              />
              {myArray && myArray.length > 1 && (
                <ButtonContainer>
                  {myArray.map(value => (
                    <Button onClick={() => onClick(value)} key={value}>
                      {value}
                    </Button>
                  ))}
                </ButtonContainer>
              )}
            </Document>
          </PDFWrapper>
        </Modal>
      )}
      <OpenLink
        onClick={clickTextHandler}
        isTextUnderline={isTextUnderline}
        isCookiesButtonStyles={isCookiesButtonStyles}
        isFooterButtonStyles={isFooterButtonStyles}
      >
        {text}
      </OpenLink>
    </>
  );
};

export default PDFReader;
