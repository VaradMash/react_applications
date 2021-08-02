import React from 'react';
import '../styles/scorecard.css';
import {increment_1, increment_2, reset_1, reset_2} from "../increment_script";

function ScoreCard(props){
    const scorecard_style = {
        display : "flex",
        width: "50%",
        marginLeft: "25%",
        marginRight: "25%"
    };
    let high_name = "high_" + props.name;
    let low_name = "low_" + props.name;
    let button_name = "increment_" + props.name;
    return(
        <div className="Scorecard">
            <center><h1 style={{fontFamily: "Style Script", fontSize: "50px"}} >Player {props.name}</h1></center>
            <center><h1 contentEditable="true" style={{fontFamily: "Style Script", fontSize: "50px"}}>Enter Name</h1></center>
            <div style={scorecard_style}>
                <div className="number">
                    <center><h1 id={high_name} className="counters">0</h1></center>
                </div>
                <div className="number">
                    <center><h1 id={low_name} className="counters">0</h1></center>
                </div>
            </div>
            <center><button type="button" onClick={button_name==="increment_1"?increment_1:increment_2} className="button">Increment</button></center>
            <center><button type="button" onClick={button_name === "increment_1"?reset_1:reset_2} className="button">Reset</button></center>
        </div>
    );
}

export default ScoreCard;