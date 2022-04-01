import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [guess1, setGuess1] = useState("");
  let word = "stamp";
  let wrong = 0;

  function handleGuess1Change(event) {
    setGuess1(event.target.value);
  }

  function handleGuess1Submit(event) {
    event.preventDefault();
    if (guess1 === word) {
      console.log("good");
    } else {
      console.log("wrong");
      wrong = wrong + 1;
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleGuess1Submit}>
        {" "}
        <label>
          Name:
          <input
            type="text"
            value={guess1}
            onChange={handleGuess1Change}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function Guess(props) {
  return (
    <form onSubmit={props.handleGuess1Submit}>
      {" "}
      <label>
        Name:
        <input
          type="text"
          value={props.guess1}
          onChange={props.handleGuess1Change}
        />{" "}
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
