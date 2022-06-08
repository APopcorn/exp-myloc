import { useState, useEffect, useRef } from "react"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";




const SlideshowWindow = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;


  /* chancing slides */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
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
    console.log("time intervals: " + currentSlideTime + "s");

    const intervals = setInterval(play, 1000 * currentSlideTime)
    return () => clearInterval(intervals)
  }, [current]) 

  const autoPlay = () => {
    console.log(slides);

  }

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
                  return <img 
                    className="image" 
                    src={slide.url} />
                case 'file':
                  return <img 
                  className="image" 
                  src={slide.file} />
                case 'schema':

                  return <FullCalendar 
                    plugins={[ timeGridPlugin ]} 
                    initialView={slide.schemaFormat} 
                    weekends={false}
                    slotMinTime={"08:00:00"} // varriabel för min obs
                    slotMaxTime={"17:00:00"} // variabel för max obs

                    height={"auto"} 
                    expandRows={true}

                    events={slide.schema}
                    
                    
                    />
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

