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

const NormalCalenderEvent = ({ arg }) => {

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

    const event = arg.event
    const eventExtend = event.extendedProps  

    return (
        <div className={"calender__event"}
                    style={{
                        backgroundImage: `url(${eval(eventExtend.pattern)})`,
                        overflow: "hidden",
                    }}
                    >
                    {/* Icon  event.extendedProps.icon */}

                    {/* Header */}
                    <div 
                    style={{
                        color: `${"#000"}`,
                        backgroundColor: "#e8e8e8",
                        // fontWeight: "bold"
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
    )
}

export default NormalCalenderEvent