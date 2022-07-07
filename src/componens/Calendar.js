import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";

import svLocale from "@fullcalendar/core/locales/sv";
import enLocale from "@fullcalendar/core/locales/en-gb";
import nbLocale from "@fullcalendar/core/locales/nb";

import SmallCalenderEvent from './SmallCalenderEvent';
import NormalCalenderEvent from './NormalCalenderEvent';


const Calendar = ({workDayStart, workDayEnd, slide, calendarEvent }) => {
    
    function timeDuration(time) {
        const lengetOfEventList = time.split("-").map(s => {
            const ss = s.split(":")
            return parseInt(ss[0]) * 60 + parseInt(ss[1])});
        return lengetOfEventList[1] - lengetOfEventList[0]
    }


    return (
        <div className='image'>
            
            <FullCalendar 
            plugins={[ timeGridPlugin, dayGridPlugin ]} 
            initialView={slide.viewMode} 
            weekends={slide.weekends} // slide.weekends

            initialDate={slide.startDate} 
            locale={enLocale}

            headerToolbar={false}

            firstDay={"1"}
   
            
            slotMinTime={workDayStart} 
            slotMaxTime={workDayEnd} 
            
            height={window.innerHeight > 600 ? "calc(100vh - 80px)" : "100vh"} 
            expandRows={true}

            nowIndicator={true} // temp

            slotDuration={timeDuration(`${workDayStart} - ${workDayEnd}`) > 9 * 60 ? "02:00" : "00:30"}

            events={calendarEvent}
            eventContent={function(arg) {
                return <>
                {timeDuration(arg.timeText) > 30 ? // what point small 
                    <NormalCalenderEvent arg={arg} /> : 
                    <SmallCalenderEvent arg={arg}/> }
                </>
            }}
            
            />    
        </div>
    )
}

export default Calendar