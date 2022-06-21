import { useEffect, useState } from "react";
import SlideshowWindow from "./componens/SlideshowWindow";
import Header from "./componens/Header";

import Url from "./componens/Url";
import File from "./componens/File";
import Calendar from "./componens/Calendar";

import TestPDF1 from './Sample Documents/PDF_Test.pdf';
import TestPDF2 from './Sample Documents/The-Design.pdf';
import TestPDF3 from './Sample Documents/Proofs.pdf';

import TestPNG1 from './Sample Documents/Local_PNG_Test.png'
import TestPNG2 from './Sample Documents/Plots.png'

import TestOTS_PDF1 from './Sample Documents/OTS-1.pdf'
import TestOTS_PDF2 from './Sample Documents/OTS-2.pdf'

import TestMath_JPEG1 from './Sample Documents/Math_JPEG.jpeg'

import TestEXEL_V2_2 from './Sample Documents/To test/Test 1 Bildspel.xlsx' // inte än
import TestPDF_V2_2 from './Sample Documents/To test/test 2 Bildspel.pdf'
import TestPDF_V2_3 from './Sample Documents/To test/test 3 Bildspel.pdf'
import TestPDF_V2_4 from './Sample Documents/To test/test 4 Bildspel.pdf'



function App() {
  const [slides, setSlides] = useState([
    /* {
      order: 4,
      time: 5,
      format: 'file',
      name: "jpeg",
      file: "https://kunde.byggekamera.no/?u=prad&camera=BK0244&width=fullsize"
    }, */
    /* {
      order: 4,
      time: 5,
      format: 'file',
      name: "jpeg",
      file: TestMath_JPEG1
    }, */
    {
      order: 4,
      time: 5,
      format: 'url',
      name: "url",
      url: "https://sv-se.facebook.com/"
    },
    {
      order: 4,
      time: 5,
      format: 'url',
      name: "url",
      url: "https://myloc.se/sv/start/"
    },
    /* {
      order: 4,
      time: 5,
      format: 'file',
      name: "pdf",
      page: 1,
      file: TestPDF_V2_2
    }, */
    /* {
      order: 4,
      time: 5,
      format: 'file',
      name: "pdf",
      page: 1,
      file: TestPDF_V2_3
    }, */
    /* {
      order: 4,
      time: 5,
      format: 'file',
      name: "pdf",
      page: 1,
      file: TestPDF_V2_4
    }, */
    /* {
      order: 4,
      time: 5,
      format: 'file',
      name: "pdf",
      page: 1,
      file: TestOTS_PDF1
    }, */
    /* {
      order: 4,
      time: 5,
      format: 'file',
      name: "pdf",
      page: 1,
      file: TestOTS_PDF2
    }, */

    
  ])

  
  return (
    <div className="container">
        <Header slides={slides} />
        {/* <SlideshowWindow slides={slides} /> */}
        
        
    </div>
  );
}

export default App;
