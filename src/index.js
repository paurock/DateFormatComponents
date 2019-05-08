import React from "react";
import ReactDOM from "react-dom";

import { FormatedDate } from "./HumanDateConverter";
import { Hhmmyyyy } from "./HHMMYEAR";

function App() {
  return (
    <div className="App">
      <p>
        This is a result from an extended date converter:
        <br />
        <FormatedDate />
        <br />
      </p>
      <p>
        This is a result from a simple (only dd-mm-yyyy) converter:
        <br />
        <Hhmmyyyy />
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
