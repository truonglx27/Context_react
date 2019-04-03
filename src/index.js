import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import NumberProvider from "./Context/NumberProvider";
import NumberContext from "./Context/NumberContext";

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <NumberContext>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
            </div>
          )}
        </NumberContext>
      </div>
    </NumberProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
