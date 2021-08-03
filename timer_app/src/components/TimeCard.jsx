import React from "react";

function TimeCard(props){
    return(
        <div className="Timecard">
            <center><h1 className="time_value">{props.value}</h1></center>
        </div>
    )
}

export default TimeCard;