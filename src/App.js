import { useState } from "react";
import SlideshowWindow from "./componens/SlideshowWindow";
import Header from "./componens/Header";

import Url from "./componens/Url";
import File from "./componens/File";
import Calendar from "./componens/Calendar";


import TestPDF from './Sample Documents/PDF_Test.pdf';
import TestPNG from './Sample Documents/Local_PNG_Test.png'



function App() {
  const [slides, setSlides] = useState([
    {
    order: 1,
    time: 5,
    format: 'schema',
    name: "Kalender",
    schema: [
      {
        title  : 'event1',
        start  : '2022-06-06'
      },
      {
        title  : 'event2',
        start  : '2022-06-06', 
        end    : '2022-06-08'
      },
      {
        title  : 'event3',
        start  : '2022-06-09T12:30:00',
        allDay : false // will make the time show
      }
    ],
    workday: ["08:00:00", "17:00:00"],
    initDate: '2022-06-08',
    schemaFormat: "timeGridDay",
    weekends: true,

  },
  {
    order: 2,
    time: 5,
    format: 'schema',
    name: "Kalender ve",
    schema: [
      {
        title  : 'event1',
        start  : '2022-06-06'
      },
      {
        title  : 'event2',
        start  : '2022-06-06',
        end    : '2022-06-08'
      },
      {
        title  : 'event3',
        start  : '2022-06-09T12:30:00',
        allDay : false // will make the time show
      }
    ],
    workday: ["08:00:00", "17:00:00"],
    initDate: '2022-06-08',
    schemaFormat: "timeGridWeek",
    weekends: true,
  },
  {
    order: 3,
    time: 5,
    format: 'file',
    name: "jpeg",
    file: TestPNG,
  },
  /* {
    order: 4,
    time: 5,
    format: 'file',
    name: "pdf",
    page: 2,
    file: TestPDF,
  }, */
  {
    order: 5,
    time: 5,
    format: 'file',
    name: "png",
    file: TestPNG ,
  }, 
  {
    order: 6,
    time: 5,
    format: 'url',
    name: "vanlige länk hemsida",
    url: "https://myloc.se/sv/start/",
  }, 
  {
    order: 7,
    time: 5,
    format: 'url',
    name: "speciel länk till byggkamera",
    url: "https://myloc.se/sv/havsalliansen-how-to-reuse-and-recycle-in-practice-and-at-scale/", // https://images.squarespace-cdn.com/content/v1/5ca5c15429f2cc0845827a9d/1608134380887-9KPHE8RJVKFODF3YTVJ6/DJI_0169-Pano-2.jpg
  }, 
  /* {
    order: 8,
    time: 5,
    format: 'file',
    name: "pdf",
    page: 1,
    file: TestPDF,
    filename: ""
  }, */ 
  ])


  return (
    <div className="container">
        <Header slides={slides} />
        <SlideshowWindow slides={slides} />
        {/* <Calendar slide={slides[1]}/> */}
        {/* <File file={slides[6]}/> */}
        {/* <embed src={TestPDF} type="" width={1000} height={1000} /> */}
        
        {/* <File file={slides[3]}/> */}
        {/* <Url url={slides[5]}/> */}
        
        

        
    </div>
  );
}

export default App;
