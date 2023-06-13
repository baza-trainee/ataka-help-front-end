import { FC, useRef, useState } from "react";
import * as PDFJS from "pdfjs-dist";
PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;
import { IFileOpenLink } from "@/types";
import Modal from "../Modal/Modal";
import { PagesList, OpenLink } from "./FileOpenLink.styled";

const FileOpenLink: FC<IFileOpenLink> = ({
  text,
  path,
  isTextUnderline,
  isCookiesButtonStyles,
  isFooterButtonStyles,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageRenderRef = useRef<HTMLUListElement>(null);

  const clickTextHandler = () => {
    getPDFData();
    setIsModalOpen(true);
  };

  const DEFAULT_SCALE = 1;

  const getPDFData = () => {
    showPDFInCanvas(path);
  };

  const showPDFInCanvas = async (path: string) => {
    const loadingTask: PDFJS.PDFDocumentLoadingTask = PDFJS.getDocument(path);
    try {
      const pdf: PDFJS.PDFDocumentProxy = await loadingTask.promise;
      const pageNo = 0;
      fetchPageNo(pageNo, pdf);
    } catch (error) {
      console.log("PDF error", error);
    }
  };

  const fetchPageNo = async (pageNo: number, pdf: PDFJS.PDFDocumentProxy) => {
    if (pageNo < pdf._pdfInfo.numPages) {
      pageNo += 1;
      const page: number = await createContextForCanvas(pdf, pageNo);
      fetchPageNo(page, pdf);
    }
  };

  const createContextForCanvas = async (
    pdf: PDFJS.PDFDocumentProxy,
    pageNo: number,
  ) => {
    const page: PDFJS.PDFPageProxy = await pdf.getPage(pageNo);
    const container = pageRenderRef.current as HTMLUListElement;
    let viewport = page.getViewport({ scale: DEFAULT_SCALE });
    const scale = container.clientWidth / viewport.width;
    viewport = page.getViewport({ scale });

    const li: HTMLLIElement = document.createElement("li");
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    li.appendChild(canvas);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.height = viewport.height;
    canvas.width = viewport.width;
    container.appendChild(li);

    li.setAttribute("id", "page-" + (page._pageIndex + 1));
    li.setAttribute("style", "width: 100%; border: solid 0.5px #000000");
    canvas.setAttribute("style", "width: 100%");

    const renderContext = {
      canvasContext: ctx,
      viewport,
    };

    page.render(renderContext);

    return pageNo;
  };

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <PagesList ref={pageRenderRef} />
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

export default FileOpenLink;
