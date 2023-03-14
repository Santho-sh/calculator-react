import "./App.scss";
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const NumberClick = (event) => {
    setInput(input + event.target.value);
  };

  const OperationClick = (event) => {
    setInput(input + event.target.value);
  };

  const ClearClick = () => {
    setInput("");
    setAnswer("");
  };

  const EqualsClick = () => {
    try {
      const result = eval(input);
      setAnswer(result);
    } catch (error) {
      setAnswer("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>
        <input type="text" value={input} />
        <div className="row">
          <button onClick={NumberClick} value="1">
            1
          </button>
          <button onClick={NumberClick} value="2">
            2
          </button>
          <button onClick={NumberClick} value="3">
            3
          </button>
          <button onClick={OperationClick} value="*">
            *
          </button>
        </div>

        <br></br>

        <div className="row">
          <button onClick={NumberClick} value="4">
            4
          </button>
          <button onClick={NumberClick} value="5">
            5
          </button>
          <button onClick={NumberClick} value="6">
            6
          </button>
          <button onClick={OperationClick} value="-">
            -
          </button>
        </div>

        <br></br>

        <div className="row">
          <button onClick={NumberClick} value="7">
            7
          </button>
          <button onClick={NumberClick} value="8">
            8
          </button>
          <button onClick={NumberClick} value="9">
            9
          </button>
          <button onClick={OperationClick} value="+">
            +
          </button>
        </div>

        <br></br>

        <div className="row">
          <button onClick={ClearClick} value="clear">
            Clear
          </button>
          <button onClick={NumberClick} value="0">
            0
          </button>
          <button onClick={EqualsClick} value="=">
            =
          </button>
          <button onClick={OperationClick} value="/">
            /
          </button>
        </div>
        <div className="result">{answer}</div>
      </div>
    </div>
  );
}

export default Calculator;
