import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [guess1, setGuess1] = useState("");
  const [colorizedGuess1, setColorizedGuess1] = useState("");
  let word = "stamp";
  let wrong = 0;

  function handleGuess1Change(event) {
    if (event.target.value.length <= 5) {
      setGuess1(event.target.value);
    }
  }

  function handleGuess1Submit(event) {
    event.preventDefault();
    if (guess1 === word) {
      console.log("good");
      setColorizedGuess1(colorizeWord(guess1));
    } else {
      console.log("wrong");
      wrong = wrong + 1;
      setColorizedGuess1(colorizeWord(guess1));
    }
  }

  function colorizeWord(guess) {
    let colorizedWord = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === word[i]) {
        colorizedWord.push(<span style={{ color: "green" }}>{guess[i]}</span>);
      } else if (word.includes(guess[i])) {
        colorizedWord.push(<span style={{ color: "orange" }}>{guess[i]}</span>);
      } else {
        colorizedWord.push(<span style={{ color: "grey" }}>{guess[i]}</span>);
      }
    }
    return colorizedWord;
  }

  return (
    <div className="App">
      <h1>Welcome to Wardle!</h1>
      <h2>Type in a 5 letter word below, and try to win!</h2>
      <form onSubmit={handleGuess1Submit}>
        {" "}
        <label>
          Guess:
          <input
            type="text"
            value={guess1}
            onChange={handleGuess1Change}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2 className="g">{colorizedGuess1}</h2>
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
