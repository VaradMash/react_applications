function increment_1(){
    let high_value = parseInt(document.getElementById("high_1").innerHTML);
    let low_value = parseInt(document.getElementById("low_1").innerHTML);
    let high_element = document.getElementById("high_1");
    let low_element = document.getElementById("low_1")
    if (low_value === 9)
    {
        if(high_value === 9)
        {
            alert("Counter Overflow for Player 1!");
        }
        else{
            high_element.innerHTML = high_value + 1;
            low_element.innerHTML = 0;
        }
    }
    else
    {
        low_element.innerHTML = low_value + 1;
    }
}

function increment_2(){
    let high_value = parseInt(document.getElementById("high_2").innerHTML);
    let low_value = parseInt(document.getElementById("low_2").innerHTML);
    let high_element = document.getElementById("high_2");
    let low_element = document.getElementById("low_2")
    if (low_value === 9)
    {
        if(high_value === 9)
        {
            alert("Counter Overflow for Player 2!");
        }
        else{
            high_element.innerHTML = high_value + 1;
            low_element.innerHTML = 0;
        }
    }
    else
    {
        low_element.innerHTML = low_value + 1;
    }
}

function reset_1(){
    document.getElementById("high_1").innerHTML = 0;
    document.getElementById("low_1").innerHTML = 0;
    alert("Scoreboard reset for Player 1 !");
}

function reset_2(){
    document.getElementById("high_2").innerHTML = 0;
    document.getElementById("low_2").innerHTML = 0;
    alert("Scoreboard reset for Player 2 !");
}

export {increment_1, increment_2, reset_1, reset_2};