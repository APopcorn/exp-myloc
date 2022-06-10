import { useState } from "react";
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



function App() {
  const [slides, setSlides] = useState([
    {
    order: 1,
    time: 3,
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
    initDate: '2022-06-09',
    schemaFormat: "timeGridDay",
    weekends: true,

  },
  {
    order: 2,
    time: 3,
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
    file: TestPNG1,
  },
  {
    order: 4,
    time: 5,
    format: 'file',
    name: "pdf",
    page: 2,
    file: TestPDF3,
  },
  {
    order: 5,
    time: 1,
    format: 'file',
    name: "png",
    file: TestPNG1 ,
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
    time: 2,
    format: 'url',
    name: "speciel länk till byggkamera",
    url: "https://myloc.se/sv/havsalliansen-how-to-reuse-and-recycle-in-practice-and-at-scale/", 
  }, 
  {
    order: 8,
    time: 5,
    format: 'file',
    name: "pdf",
    page: 120,
    file: TestPDF2,
    filename: ""
  }, 
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
