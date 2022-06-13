import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const File = ({ file }) => {

  
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
                  return <>
                    <Document file={file.file} 
                      className="doc"
                    >
                      <Page pageNumber={file.page} 
                        className="page"
                        scale={1.3}
                        /* width={calc(100vh - 80px)} */
                         
                          /> 
                      
                    </Document>
                  </>
                   
                default:
                  return null
              }
            })()}
            
        </>
    )
}


export default File

