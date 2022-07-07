import { useEffect, useState } from "react";
import SlideshowWindow from "./componens/SlideshowWindow";
import Header from "./componens/Header";

import axios from "axios";

function App() {

  const [update, setUpdate] = useState(false)
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

  
  useEffect(
    () => {
      axios.post("https://construction-test.myloc.se/mylocTEST/rs/construction/v1/authentication", 
        /* {
          "username": "kalenderpyramiden@arcona.se",
          "password": "x"
        } */
        {
          "username": "kalender.astoria@arcona.se",
          "password": "xyz"
        }
        ).then(response => {
          
          // console.log(response.data.id);
          const serverSlideshow = "https://construction-test.myloc.se/mylocTEST/rs/construction/v1/slideshow/getSlideshow"
          axios.post(serverSlideshow, 
            {
              "calendarEvents": {
                  "filter": {
                  "all": true
              },
                  "include": true
              }
            },
            {
              headers: {
                'sessionId': `${response.data.id}` 
              }
            }
          ).then(response => {
            if (
              (response.headers["content-type"] === "application/json;charset=UTF-8") && 

              (JSON.stringify(response.data).replaceAll(/sessionid=(.+)"/g, '"') !== 
              window.localStorage.getItem("slides").replaceAll(/sessionid=(.+)"/g, '"'))) {
                
                console.log("Updated slides found");
                window.localStorage.setItem("slides", JSON.stringify(response.data))
                setSlides(response.data)
                //window.location.reload()
            }
            
          }).catch(err => {
            console.log(err);
            if (JSON.stringify(slides) !== window.localStorage.getItem("slides")) {
              setSlides(JSON.parse(window.localStorage.getItem("slides")))
            }
          })

        }).catch(err => {
          console.log(err);
        })

      const intervals = setInterval(getUpdate, 900000) // 1000 == 1s; 15min = 900000
      return () => clearInterval(intervals)
    }
  ,[update])

  const getUpdate = () => {
    console.log("log");
    setUpdate(!update)
  }
  
  return (
    <div className="container">
        <Header 
          projectName={slides.slideshow.projectName}
          projectID={slides.slideshow.projectId}
          companyLogo={slides.slideshow.companyLogoUrl}
           />
        <SlideshowWindow 
          slides={slides.slideshow.slides}
          tempWorkDayTime={[slides.slideshow.workDayStart, slides.slideshow.workDayEnd]} 
          calendarEvents={slides.calendarEvents} />

    </div>
  );
}

export default App;
