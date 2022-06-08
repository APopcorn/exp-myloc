import { useState } from "react";
import SlideshowWindow from "./componens/SlideshowWindow";
import Header from "./componens/Header";




function App() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      format: 'url',
      time: 2,
      url: 'https://myloc.se/wp-content/uploads/2018/05/Myloc-DN-annons.png',
      schema: '',
      file: '',
    },
    {
      id: 2,
      format: 'schema',
      time: 4,
      url: 'https://www.cityofmelrose.org/sites/g/files/vyhlif3451/f/uploads/dpw_construction_schedule_2017.jpg',
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
      schemaFormat: "timeGridWeek",
      file: '',
    },
    
    
    
  ])


  return (
    <div className="container">
        {/* <Header slides={slides} /> */}
        <SlideshowWindow slides={slides} />
        
    </div>
  );
}

export default App;
