import { useState, useEffect } from "react";

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const File = ({ file }) => {
  const [image, setImage] = useState("");


  const convertPathTToBlob = async () => {
    const images = [];

    const pdf = await pdfjs.getDocument(file.file).promise;
    const canvas = document.createElement("canvas");

    const page = await pdf.getPage(file.page);
    const viewport = page.getViewport({ scale: 1 });
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    await page.render({ canvasContext: context, viewport: viewport }).promise;

    images.push(canvas.toDataURL())

    canvas.remove();

    setImage(images)
    // console.log(images);
  }
  
  
  useEffect(() => {
    if (file.name == 'pdf') {
      convertPathTToBlob()
    }
  }, [])
  
  
    return (
        <>

            {(() => {
              switch (file.name) {
                case 'png':
                  return <img 
                    className="image" 
                    src={file.file} 
                    alt="png"
                    />

                case 'jpeg':
                  return <img 
                    className="image" 
                    src={file.file} 
                    alt="jpeg"
                    />

                case 'pdf':
                  return <img 
                  className="image pdf" 
                  src={image[0]} 
                  alt="jpeg"
                  />
                
                case 'pdf2':
                  return <>
                  
                </>   
                  
                   
                default:
                  return null
              }
            })()}
            
        </>
    )
}


export default File

