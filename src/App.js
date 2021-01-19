import React from "react";
import { Button } from "@mskcc/atoms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button label="Test" />
      <h1 className="text-tiny text-primary-base">another text</h1>
    </div>
  );
}

export default App;
