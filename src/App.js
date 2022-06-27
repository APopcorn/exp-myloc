import { useEffect, useState } from "react";
import SlideshowWindow from "./componens/SlideshowWindow";
import Header from "./componens/Header";

import TestPNG1 from './Sample Documents/Local_PNG_Test.png'

import axios from "axios";

function App() {

  const [update, setUpdate] = useState(false)
  const [server, setServer] = useState('https://construction-test.myloc.se/mylocTEST/rs/construction/v1/authentication')
  const [slides, setSlides] = useState(
    {
      "slideshow": {
          "projectName": "Projektnamnet",
          "companyLogo": "logo",
          "slides": [
              {
                  "type": "Calendar",
                  "events": {
                      "count": 4,
                      "ids": ["1", "3", "5", "6"]
                  },
                  "startDate": "2022-06-23 12:41:51",
                  "viewMode": "timeGridDay",
              },
              {
                  "type": "Calendar",
                  "events": {
                      "count": 3,
                      "ids": ["2", "3", "4"]
                  },
                  "startDate": "2022-06-22 12:41:52",
                  "viewMode": "timeGridWeek"
              },
              /* {
                  "type": "Image"
              }, */
              /* {
                  "type": "ExternalPage",
                  "externalUrl": "http://myloc.se",
              }, */
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
              "end": "2022-06-23",
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
  )

  
  const slidesHolder = {
    "slideshow": {
        "projectName": "Projektnamnet",
        "companyLogo": "logo",
        "slides": [
            {
                "type": "Calendar",
                "events": {
                    "count": 4,
                    "ids": ["1", "3", "5", "6"]
                },
                "startDate": "2022-06-23 12:41:51",
                "viewMode": "timeGridDay",
            },
            {
                "type": "Calendar",
                "events": {
                    "count": 3,
                    "ids": ["2", "3", "4"]
                },
                "startDate": "2022-06-22 12:41:52",
                "viewMode": "timeGridWeek"
            },
            {
                "type": "Image",
                "file": TestPNG1,
                "name": "png"
            },
            /* {
                "type": "ExternalPage",
                "externalUrl": "http://myloc.se",
            }, */
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
            "end": "2022-06-23",
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
                "type": "Calendar",
                "events": {
                    "count": 3,
                    "ids": ["2", "3", "4"]
                },
                "startDate": "2022-06-22 12:41:52",
                "viewMode": "timeGridWeek"
            },
            {
                "type": "ExternalPage",
                "externalUrl": "http://myloc.se",
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
            "end": "2022-06-23",
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

    console.log("Updated");

    axios.post(server, 
    {
      "username": "kalenderpyramiden@arcona.se",
      "password": "x"
    }
    ).then(response => {
      /* window.localStorage.setItem("slides", JSON.stringify(response.data)) */ 
      const inSert = Math.random() < 0.8 ? slidesHolder : otherSlidesHolder;
      window.localStorage.setItem("slides", JSON.stringify(inSert))
      setSlides(inSert) // JSON.parse()
    }).catch(err => {
      window.localStorage.getItem("slides")
    })

    const intervals = setInterval(getUpdate, 4000)
    return () => clearInterval(intervals)
  }
  ,[update])

  

  const getUpdate = () => {
    const brokenServer = 'https://construction-test.myloc.se/mylocTEST/rs/construction/v1/authenticati' 
    const workingServer = 'https://construction-test.myloc.se/mylocTEST/rs/construction/v1/authentication'
  
    if (Math.random() > 0.8) {
      setServer(brokenServer)
    } else {
      setServer(workingServer)
    }
    
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
