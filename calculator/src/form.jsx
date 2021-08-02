import React from "react";
import "./form.css";
import * as Calculator from "./calculator";

function Form(){
    return (
        <div className="form_window">
            <div id="input_window">
                <form className="form">
                    <h2>Enter a</h2>
                    <input type="number" id="a" placeholder="Enter operand 'a'" />
                    <br />
                    <h2 id="operand_b">Enter b</h2>
                    <input type="number" id="b" placeholder="Enter operand 'b'" />
                    <br />
                    <br />
                </form>
                <div className="button_grid">
                    <div className="button_bar">
                        <button onClick={Calculator.add}>+</button>
                        <button onClick={Calculator.subtract}>-</button>
                        <button onClick={Calculator.multiply}>X</button>
                    </div>
                    <div className="button_bar">
                        <button onClick={Calculator.divide}>/</button>
                        <button onClick={Calculator.modulo}>%</button>
                        <button onClick={Calculator.power}>a <sup>b</sup></button>
                    </div>
                    <div className="button_bar">
                        <button onClick={Calculator.sine}>sin(a)</button>
                        <button onClick={Calculator.cosine}>cos(a)</button>
                        <button onClick={Calculator.tangent}>tan(a)</button>
                    </div>
                    <div className="button_bar all_clear">
                        <button onClick={Calculator.clear}>AC</button>
                    </div>
                </div>
            </div>
            <div className="result_window">
                <pre id="result">Result : </pre>
                <div id="result_cards"></div>
            </div>
        </div>
    );
}

export default Form;