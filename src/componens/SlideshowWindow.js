import { useState, useEffect, useRef } from "react"
import Calendar from "./Calendar";
import File from "./File";
import Url from "./Url";



const SlideshowWindow = ({ slides, calendarEvents }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;


  /* chancing slides */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };



  /* AutoPlay functionality  */
  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    if (length === 0 || slides === null) {
      return () => null;
    } 
    
    const play = () => {
      autoPlayRef.current()
    }
    
    const currentSlideTime = 5 // slides[current].time;
    /* console.log("time intervals: " + currentSlideTime + "s"); */

    const intervals = setInterval(play, 1000 * currentSlideTime)
    return () => clearInterval(intervals)
  }, [current]) 


  /* stop */
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slideshow__window">

      {slides.map((slide, index) => {
        
        return (
          <div className={index === current ? 'slide__img active' : 'slide__img'} key={index}>
            {
            
            (() => {
              switch (slide.type) {
                case 'ExternalPage':
                  return <Url url={slide}/>

                case 'Image':
                  return <File file={slide}/>

                case 'Calendar':
 
                  return <Calendar 
                    slide={slide} 
                    calendarEvent={calendarEvents.filter(event => 
                      slide.events.ids.includes(event.id))}/>

                default:
                  return null
              }
            })()
            
            }
            
            
          </div>
        )
      })}

    </section>
  )
}

export default SlideshowWindow

