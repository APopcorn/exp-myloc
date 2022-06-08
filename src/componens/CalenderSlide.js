import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
/* import svLocale from "@fullcalendar/core/locales/sv"; */

const Calendar = ({ slide }) => {

    return (
        <FullCalendar 
            plugins={[ timeGridPlugin, dayGridPlugin ]} 
            initialView={slide.schemaFormat} //slide.schemaFormat
            weekends={slide.weekends}

            initialDate={slide.initDate} 
            

            headerToolbar={false}

            firstDay={"1"}

            slotMinTime={slide.workday[0]} // varriabel för min obs
            slotMaxTime={slide.workday[1]} // variabel för max obs

            height={"auto"} 
            expandRows={true}

            events={slide.schema}
            
        />
    )
}

export default Calendar