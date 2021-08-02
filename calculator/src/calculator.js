function clear(){
    const result_component = document.getElementById("result");
    result_component.innerHTML = "Result : ";
}

function add(){
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    // validation checks on a and b
    if (a === '' || b === '')
    {
        alert("Please enter a and b ");
    }
    else
    {
        result_component.innerHTML += "\n\n => " +  a+ " + " + b + " = " + (parseFloat(a)+parseFloat(b));
    }
}

function subtract(){
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    // validation checks on a and b
    if (a === '' || b === '')
    {
        alert("Please enter a and b ");
    }
    else
    {
        result_component.innerHTML += "\n\n => " +  a+ " - " + b + " = " + (parseFloat(a)-parseFloat(b));
    }
}

function multiply(){
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    // validation checks on a and b
    if (a === '' || b === '')
    {
        alert("Please enter a and b ");
    }
    else
    {
        result_component.innerHTML += "\n\n => " +  a+ " X " + b + " = " + (parseFloat(a)*parseFloat(b));
    }
}

function divide(){
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    // validation checks on a and b
    if (a === '' || b === '')
    {
        alert("Please enter a and b ");
    }
    else if (b === '0')
    {
        alert("Cannot divide by 0 !");
    }
    else
    {
        result_component.innerHTML += "\n\n => " +  a+ " / " + b + " = " + (parseFloat(a)/parseFloat(b));
    }

}

function modulo(){
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    // validation checks on a and b
    if (a === '' || b === '')
    {
        alert("Please enter a and b ");
    }
    else if (b === '0')
    {
        alert("Cannot divide by 0 !");
    }
    else
    {
        result_component.innerHTML += "\n\n => " +  a+ " (modulo) " + b + " = " + (parseFloat(a)%parseFloat(b));
    }
}

function sine(){
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    // validation checks on a and b
    if (a === '')
    {
        alert("Please enter a");
    }
    else
    {
        result_component.innerHTML += "\n\n => sin(" +  a+ ") = " + (Math.sin(parseFloat(a)));
    }
}

function cosine(){
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    // validation checks on a and b
    if (a === '')
    {
        alert("Please enter a");
    }
    else
    {
        result_component.innerHTML += "\n\n => cos(" +  a+ ") = " + (Math.cos(parseFloat(a)));
    }
}


function tangent() {
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    // validation checks on a and b
    if (a === '')
    {
        alert("Please enter a");
    }
    else if ((parseFloat(a)%Math.PI/2)%2 === 1)
    {
        result_component.innerHTML += "\n\n => tan(" +  a+ ") = Not defined !";
    }
    else
    {
        result_component.innerHTML += "\n\n => tan(" +  a+ ") = " + (Math.tan(parseFloat(a)));
    }
}


function power() {
    const result_component = document.getElementById("result");
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    // validation checks on a and b
    if (a === '' || b === '')
    {
        alert("Please enter a and b ");
    }
    else
    {
        result_component.innerHTML += "\n\n => " +  a+ " ^ " + b + " = " + Math.pow(parseFloat(a), parseFloat(b));
    }
}

export {add, subtract, sine, cosine, multiply, divide, modulo, power, tangent, clear};