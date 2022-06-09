import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

import svLocale from "@fullcalendar/core/locales/sv";
import enLocale from "@fullcalendar/core/locales/en-gb";
import nbLocale from "@fullcalendar/core/locales/nb";

const Calendar = ({ slide }) => {

    return (
        <div className='image'>
            <FullCalendar 
            plugins={[ timeGridPlugin, dayGridPlugin ]} 
            initialView={slide.schemaFormat} //slide.schemaFormat
            weekends={slide.weekends}

            initialDate={slide.initDate} 
            locale={enLocale}

            headerToolbar={false}

            firstDay={"1"}

            slotMinTime={slide.workday[0]} // varriabel för min obs
            slotMaxTime={slide.workday[1]} // variabel för max obs
            
            height={"calc(100vh - 100px)"}
            expandRows={true}

            events={slide.schema}
            
            />    
        </div>
    )
}

export default Calendar