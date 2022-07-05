import { useEffect, useState } from "react";
import SlideshowWindow from "./componens/SlideshowWindow";
import Header from "./componens/Header";

import TestPNG1 from './Sample Documents/Local_PNG_Test.png'
import TestPDF1 from './Sample Documents/OTS-2.pdf'

import axios from "axios";

function App() {

  const [update, setUpdate] = useState(false)
  const [server, setServer] = useState('https://construction-test.myloc.se/mylocTEST/rs/construction/v1/authentication')
  const [slides, setSlides] = useState(() => {
    const getSlides = window.localStorage.getItem("slides");
    return getSlides === null ? {
    "slideshow": {
        "projectName": "Loading",
        "companyLogo": "logo",
        "slides": [],
    },

    "calendarEvents": [
        
    ]
  } : JSON.parse(getSlides)})

  
  const slidesHolder = {
    "slideshow": {
        "projectName": "Projektnamnet",
        "companyLogo": "logo",
        "slides": [
            {
              "sequence": "2",
              "type": "Calendar",
              "events": {
                  "count": 4,
                  "ids": ["1", "3", "5", "6"]
              },
              "startDate": "2022-06-23 12:41:51",
              "viewMode": "timeGridDay",
            },
            {
              "sequence": "1",
                "type": "Calendar",
                "events": {
                    "count": 3,
                    "ids": ["2", "3", "4"]
                },
                "startDate": "2022-06-22 12:41:52",
                "viewMode": "timeGridWeek"
            },
            {
              "sequence": "4",
              "type": "Image",
              "file": TestPNG1,
              "name": "png"
            },
            {
              "sequence": "3",
              "type": "Image",
              "file": TestPDF1,
              "name": "pdf",
              "page": 1
            },
            {
              "sequence": "5",
              "type": "ExternalPage",
              "externalUrl": "http://myloc.se",
            },
        ],
    },

    "calendarEvents": [
        {
            "id": "1",
            "start": "2022-06-23",
            "end": "2022-06-23",
            "backgroundColor": "pink",
            "headerColor": "#ffffff",
            "pattern": "rhombs",
            "title": "Stavdal",
            "textColor": "#000",
            "bodyText": "Testpost3",
            "icon": "redWarning",
            
        },
        {
            "id": "2",
            "start": "2022-06-22 10:00",
            "end": "2022-06-22 11:30",
            "backgroundColor": "#7bd148",
            "headerColor": "",
            "pattern": "crosses",
            "title": "Stavdal",
            "textColor": "#000",
            "bodyText": "Testpost1 \\n \\n Telnr: 026464357",
            "icon": "redWarning",
            
        },
        {
            "id": "3",
            "start": "2022-06-23 11:30",
            "end": "2022-06-23 11:50",
            "backgroundColor": "#f691b2",
            "headerColor": "",
            "pattern": "dots",
            "title": "Stavdal",
            "textColor": "#000",
            "bodyText": "Testpost1 \\n \\n Telnr: 026464357",
            "icon": "redWarning",
            
        },
        {
            "id": "4",
            "start": "2022-06-22 13:00",
            "end": "2022-06-22 14:30",
            "backgroundColor": "#fae983",
            "headerColor": "",
            "pattern": "horizontal",
            "title": "Stavdal",
            "textColor": "#000",
            "bodyText": "Testpost1 \\n \\n Telnr: 026464357",
            "icon": "redWarning",
            
        },
        {
            "id": "5",
            "start": "2022-06-23 10:00",
            "end": "2022-06-23 13:00",
            "backgroundColor": "yellow",
            "headerColor": "",
            "pattern": "verticalzigzag",
            "title": "Stavdal",
            "textColor": "#549394",
            "bodyText": "Testpost2",
            "icon": "",
            
        },
        {
            "id": "6",
            "start": "2022-06-23 14:00",
            "end": "2022-06-23 16:00",
            "backgroundColor": "Oranges",
            "headerColor": "#ff40e2",
            "pattern": "bubbles",
            "title": "Stavdal",
            "textColor": "#ed2424",
            "bodyText": "Testpost2",
            "icon": "",
            
        }
    ]
  }

  const otherSlidesHolder = {
    "slideshow": {
        "projectName": "ProjektnamnetOther",
        "companyLogo": "logo",
        "slides": [
            {
              "sequence": "2",
              "type": "Calendar",
              "events": {
                  "count": 3,
                  "ids": ["2", "3", "4"]
              },
              "startDate": "2022-06-22 12:41:52",
              "viewMode": "timeGridWeek"
            },
            {
              "sequence": "1",
              "type": "Image",
              "file": TestPDF1,
              "name": "cat"
            },
        ],
    },

    "calendarEvents": [
        {
            "id": "2",
            "start": "2022-06-22 10:00",
            "end": "2022-06-22 11:30",
            "backgroundColor": "#7bd148",
            "headerColor": "",
            "pattern": "crosses",
            "title": "Stavdal",
            "textColor": "#000",
            "bodyText": "Testpost1 \\n \\n Telnr: 026464357",
            "icon": "redWarning",
            
        },
        {
            "id": "3",
            "start": "2022-06-23 11:30",
            "end": "2022-06-23 12:00",
            "backgroundColor": "#f691b2",
            "headerColor": "",
            "pattern": "dots",
            "title": "Stavdal",
            "textColor": "#000",
            "bodyText": "Testpost1 \\n \\n Telnr: 026464357",
            "icon": "redWarning",
            
        },
        {
            "id": "4",
            "start": "2022-06-22 13:00",
            "end": "2022-06-22 14:30",
            "backgroundColor": "#fae983",
            "headerColor": "",
            "pattern": "horizontal",
            "title": "Stavdal",
            "textColor": "#000",
            "bodyText": "Testpost1 \\n \\n Telnr: 026464357",
            "icon": "redWarning",
            
        }
    ]
  }


  
  useEffect(
    () => {
      axios.post(server, 
        {
          "username": "kalenderpyramiden@arcona.se",
          "password": "x"
        }
        ).then(response => {
          console.log(response);

          // -------------------------
          const randomNbr = Math.random()
          var inSert = {};

          if (JSON.stringify(slidesHolder) === window.localStorage.getItem("slides")) {
            console.log("slidesHolder:", randomNbr);
            inSert = randomNbr < 0.85 ? slidesHolder : otherSlidesHolder;
          } else {
            console.log("otherSlidesHolder:", randomNbr);
            inSert = randomNbr < 0.85 ? slidesHolder : slidesHolder;
          }
          // -------------------------
          
          // response
          if (JSON.stringify(inSert) !== window.localStorage.getItem("slides")) {
            console.log("Updated slides found");
            window.localStorage.setItem("slides", JSON.stringify(inSert))
            window.location.reload()
          } 

          //setSlides(JSON.parse(window.localStorage.getItem("slides")))

        }).catch(err => {
          console.log(err);
          if (JSON.stringify(slides) !== window.localStorage.getItem("slides")) {
            setSlides(JSON.parse(window.localStorage.getItem("slides")))
          }
        })

      const intervals = setInterval(getUpdate, 900000) // 1000 == 1s; 15min = 900 000
      return () => clearInterval(intervals)
    }
  ,[update])

  const getUpdate = () => {
    // ---------
    const brokenServer = 'https://construction-test.myloc.se/mylocTEST/rs/construction/v1' // 'https://construction-test.myloc.se/mylocTEST/rs/construction/v1/authenticati' 
    const workingServer = 'https://construction-test.myloc.se/mylocTEST/rs/construction/v1/authentication'
  
    if (Math.random() > 0.8) {
      setServer(brokenServer)
    } else {
      setServer(brokenServer)
    }
    // ---------

    setUpdate(!update)
  }

  return (
    <div className="container">
        <Header 
          projectName={slides.slideshow.projectName}
          companyLogo={slides.slideshow.companyLogo} />
        <SlideshowWindow 
          slides={slides.slideshow.slides} 
          calendarEvents={slides.calendarEvents} />

    </div>
  );
}

export default App;
