import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from '../Assets/samPoppe.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return(
    <div>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
        <Page className="text-center" pageNumber={pageNumber} />
      </Document>
      <p className="text-center"> Page {pageNumber} of {numPages}</p>
    </div>

  )
}

export default Resume;