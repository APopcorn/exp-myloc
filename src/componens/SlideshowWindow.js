import { useState, useEffect, useRef } from "react"
import Calendar from "./Calendar";
import File from "./File";
import Url from "./Url";



const SlideshowWindow = ({ slides }) => {

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
    
    const currentSlideTime = slides[current].time;
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
            {index === current ?
            
            (() => {
              switch (slide.format) {
                case 'url':
                  return <Url url={slide}/>

                case 'file':
                  return <File file={slide}/>

                case 'schema':
                  return <Calendar slide={slide}/>

                default:
                  return null
              }
            })()
            
            : null}
            
            
          </div>
        )
      })}

    </section>
  )
}

export default SlideshowWindow
