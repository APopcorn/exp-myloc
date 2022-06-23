import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

import svLocale from "@fullcalendar/core/locales/sv";
import enLocale from "@fullcalendar/core/locales/en-gb";
import nbLocale from "@fullcalendar/core/locales/nb";

import backdiagonal_grey from "../Sample Documents/patterns/backdiagonal_grey.png"
import bubbles_grey from "../Sample Documents/patterns/bubbles_grey.png"
import crosses_grey from "../Sample Documents/patterns/crosses_grey.png"
import dots_grey from "../Sample Documents/patterns/dots_grey.png"
import grid_grey from "../Sample Documents/patterns/grid_grey.png"
import horizontalzigzag_grey from "../Sample Documents/patterns/horizontalzigzag_grey.png"
import horizontal_grey from "../Sample Documents/patterns/horizontal_grey.png"
import rhombs_grey from "../Sample Documents/patterns/rhombs_grey.png"
import verticalzigzag_grey from "../Sample Documents/patterns/verticalzigzag_grey.png"
import vertical_grey from "../Sample Documents/patterns/vertical_grey.png"




const Calendar = ({ slide, calendarEvent }) => {

    const backdiagonal = backdiagonal_grey 
    const bubbles = bubbles_grey  
    const crosses = crosses_grey  
    const dots = dots_grey  
    const grid = grid_grey  
    const horizontalzigzag = horizontalzigzag_grey
    const horizontal = horizontal_grey  
    const rhombs = rhombs_grey 
    const verticalzigzag = verticalzigzag_grey 
    const vertical = vertical_grey 


    return (
        <div className='image'>
            <FullCalendar 
            plugins={[ timeGridPlugin, dayGridPlugin ]} 
            initialView={slide.viewMode} //slide.schemaFormat
            weekends={true} // slide.weekends

            initialDate={slide.startDate} 
            locale={enLocale}

            headerToolbar={false}

            firstDay={"1"}
   
            slotMinTime={"08:00:00"} // varriabel för min obs
            slotMaxTime={"17:00:00"} // variabel för max obs
            
            height={"calc(100vh - 80px)"} // calc(100vh - 80px)
            expandRows={true}

            events={calendarEvent}
            eventContent={function(arg) {
                const event = arg.event
                const eventExtend = event.extendedProps 

                return <div className={"calender__event"}
                    style={{
                        backgroundImage: `url(${eval(eventExtend.pattern)})`,
                        overflow: "hidden",
                    }}
                    >
                    {/* Icon  event.extendedProps.icon */}

                    {/* Header */}
                    <div 
                    style={{
                        color: `${eventExtend.headerColor == "" ? "#000" : eventExtend.headerColor}`
                    }}>
                        {arg.timeText} {event.title}
                    </div>

                    {/* Body */}
                    <div
                    style={{
                        color: `${eventExtend.textColor == "" ? "#000" : eventExtend.textColor}`
                    }}>
                        {eventExtend.bodyText}
                    </div>

                </div>
            }}
            
            />    
        </div>
    )
}

export default Calendar