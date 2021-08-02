import React from 'react';
import ScoreCard from './ScoreCard';

const holder_style = {
    display: "flex",
}

function Holder(){
    return(
        <div style={holder_style}>
            <ScoreCard name="1"/>
            <ScoreCard name="2"/>
        </div>
    );
}

export default Holder;