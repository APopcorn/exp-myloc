import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";

import svLocale from "@fullcalendar/core/locales/sv";
import enLocale from "@fullcalendar/core/locales/en-gb";
import nbLocale from "@fullcalendar/core/locales/nb";

import SmallCalenderEvent from './SmallCalenderEvent';
import NormalCalenderEvent from './NormalCalenderEvent';


const Calendar = ({ slide, calendarEvent }) => {

    return (
        <div className='image'>
            <FullCalendar 
            plugins={[ timeGridPlugin, dayGridPlugin ]} 
            initialView={slide.viewMode} 
            weekends={true} // slide.weekends

            initialDate={slide.startDate} 
            locale={enLocale}

            headerToolbar={false}

            firstDay={"1"}
   
            slotMinTime={"08:00:00"} // variable for min 
            slotMaxTime={"17:00:00"} // variable för max 
            
            height={window.innerHeight > 600 ? "calc(100vh - 80px)" : "100vh"} 
            expandRows={true}

            events={calendarEvent}
            eventContent={function(arg) {

                const lengetOfEventList = arg.timeText.split("-").map(s => {
                    const ss = s.split(":")
                    return parseInt(ss[0])*60 + parseInt(ss[1])});
                const lengetOfEvent = lengetOfEventList[1] - lengetOfEventList[0]
                return <>
                {lengetOfEvent > 30 ? // what point small 
                    <NormalCalenderEvent arg={arg} /> : 
                    <SmallCalenderEvent arg={arg}/> }
                </>
            }}
            
            />    
        </div>
    )
}

export default Calendar