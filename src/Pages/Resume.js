import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return(
    <div>
      <Document file="https://powerful-stream-89480.herokuapp.com/https://drive.google.com/file/d/1DibebDB1j9zpnWgLBxD_-iLGjjdC2bZV/export?format=pdf"/>
    </div>

  )
}

export default Resume;