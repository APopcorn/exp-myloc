/* 
import TestOTS_PDF1 from '../Sample Documents/OTS-1.pdf'
import TestOTS_PDF2 from '../Sample Documents/OTS-2.pdf'

import TestPNG2 from '../Sample Documents/Plots.png'


const PDFJS = window.pdfjsLib

const uri = URL.createObjectURL("../Sample Documents/OTS-1.pdf")
  var _PDF_DOC =  PDFJS.getDocument({ url: uri });

  var page =  _PDF_DOC.getPage(1);

  var viewport = page.getViewport(1);


  var render_context = {
    canvasContext: document.querySelector("#pdf-canvas").getContext("2d"),
    viewport: viewport
  };

  page.render(render_context);

  var canvas = document.getElementById("pdf-canvas");
  var img = canvas.toDataURL("image/png");
  


const Temp = () => {

    return (

        <div>
            <img src={TestPNG2} alt="test" />
        </div>
    )
}

export default Temp */