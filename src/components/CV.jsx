import React from 'react'
import { Document, Page } from 'react-pdf';
import CVs from "./images/resumeCraig.pdf"
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();



const CV = () => {

    


  

   return (
    <div>
        <Document file={CVs} >
            <Page pageNumber={1} />
            
        </Document>
    </div>
    )
};

export default CV