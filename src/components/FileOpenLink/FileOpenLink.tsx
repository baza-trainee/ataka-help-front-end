import { FC, useRef, useState } from "react";
import * as PDFJS from "pdfjs-dist";
PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;
import { IFileOpenLink } from "@/types";
import Modal from "../Modal/Modal";
import { FileWrapper } from "./FileOpenLink.styled";

const FileOpenLink: FC<IFileOpenLink> = ({ text, path }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickTextHandler = () => {
    getPDFData();
    setIsModalOpen(true);
  };

  let renderedPdf;
  const pageRenderRef = useRef<null | HTMLDivElement>(null);
  const DEFAULT_SCALE = 1;

  const getPDFData = async () => {
    // can be web URL
    const url: string = path;
    downloadPDFFromURL(url);
  };

  const downloadPDFFromURL = (url: string) => {
    const xhrObj = new XMLHttpRequest();
    xhrObj.open("GET", url, true);
    xhrObj.responseType = "blob";

    xhrObj.onreadystatechange = async () => {
      try {
        if (xhrObj && xhrObj.status === 400) {
          console.log("download error");
        } else {
          if (xhrObj && xhrObj.readyState === XMLHttpRequest.DONE) {
            const pdfData = await convertBlobToBase64(xhrObj.response);
            loadPDFWithBlob(pdfData);
          }
        }
      } catch (error) {
        console.error("File upload exception: ", error);
      }
    };

    xhrObj.send(null);
  };

  const loadPDFWithBlob = (pdfData: any) => {
    const encodedPDF = pdfData;
    const encodedData = encodedPDF.split(",");
    if (encodedData[1] !== undefined) {
      const pdfbase64: Buffer = Buffer.from(encodedData[1], "base64");
      showPDFInCanvas(pdfbase64);
    }
  };

  const showPDFInCanvas = async (pdfData: Buffer) => {
    const loadingTask: PDFJS.PDFDocumentLoadingTask = PDFJS.getDocument({
      data: pdfData,
    });
    loadingTask.promise.then(
      (pdf: PDFJS.PDFDocumentProxy) => {
        renderedPdf = pdf;
        const container: null | HTMLDivElement = pageRenderRef.current;
        const pageNo = 0;
        if (container) {
          fetchPageNo(pageNo, renderedPdf, container);
        }
      },
      (error) => {
        console.log("PDF error");
      }
    );
  };

  const fetchPageNo = (
    pageNo: number,
    pdf: PDFJS.PDFDocumentProxy,
    container: HTMLDivElement
  ) => {
    if (pageNo < pdf._pdfInfo.numPages) {
      pageNo += 1;
      createContextForCanvas(pdf, container, pageNo).then((page: any) => {
        fetchPageNo(page, pdf, container);
      });
    }
  };

  const createContextForCanvas = (
    pdf: PDFJS.PDFDocumentProxy,
    container: HTMLDivElement,
    pageNo: number
  ) => {
    return new Promise((resolve) => {
      pdf.getPage(pageNo).then(async (page: PDFJS.PDFPageProxy) => {
        let viewport = page.getViewport({ scale: DEFAULT_SCALE });
        const scale = container.clientWidth / viewport.width;
        viewport = page.getViewport({ scale });

        const canvas: HTMLCanvasElement = document.createElement("canvas");
        const ctx: CanvasRenderingContext2D = canvas.getContext(
          "2d"
        ) as CanvasRenderingContext2D;

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        canvas.setAttribute("id", "page-" + (page._pageIndex + 1));
        canvas.setAttribute("style", "width: 100%;");
        container.appendChild(canvas);

        const renderContext = {
          canvasContext: ctx,
          viewport,
        };

        let renderTask = page.render(renderContext);

        renderTask.promise.then(() => {
          if (pageNo !== null) {
            resolve(pageNo);
          }
        });
      });
    });
  };

  const convertBlobToBase64 = (data: any) => {
    return new Promise((resolve, reject) => {
      let fileReader: null | FileReader = new FileReader();
      data = new Blob([data], { type: "application/pdf" });
      fileReader.onload = () => {
        let result;
        if (fileReader) {
          result = fileReader.result;
        }
        try {
          fileReader = null; // clear file reader
          resolve(result);
        } catch (e) {
          fileReader = null; // clear file reader
          reject(e);
        }
      };
      fileReader.readAsDataURL(data);
    });
  };

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <FileWrapper ref={pageRenderRef}></FileWrapper>
        </Modal>
      )}
      <span onClick={clickTextHandler}>{text}</span>
    </>
  );
};

export default FileOpenLink;
