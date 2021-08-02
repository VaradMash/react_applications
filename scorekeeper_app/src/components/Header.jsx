import React from 'react';

const HeaderStyle = {
    fontFamily: "Style Script, cursive",
    color: "blanchedalmond",
    fontSize: "70px"
}

function Header(){
    return(
        <center><h1 style={HeaderStyle}>ScoreKeeper</h1></center>
    );
}

export default Header;