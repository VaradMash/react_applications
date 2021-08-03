import React, { useState } from "react";
import TimeCard from "./TimeCard"

function Holder(){

    //Callback function to be called after an interval of 1000ms.
    function updateTime()
    {
        var new_time = new Date().toLocaleTimeString();
        setTime(new_time);
    }

    //Set interval for callback
    setInterval(updateTime, 1000);

    //capture intial time value
    const current_time = new Date().toLocaleTimeString()

    //Set state for time
    const [time, setTime] = useState(current_time);
    
    const style = {
        display: "flex",
        flexDirection: "row",
        width: "40%",
        height: "120px",
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: "10%"
    }

    const seperator = {
        color: "white", 
        fontSize: "70px"
    }

    return(
        <div className="Holder" style={style}>
            <TimeCard value={time.split(":")[0]}/>
            <h1 style={seperator}>:</h1>
            <TimeCard value={time.split(":")[1]}/> 
            <h1 style={seperator}>:</h1>
            <TimeCard value={time.split(":")[2].substring(0, 2)}/>
        </div>
    )
}

export default Holder;
