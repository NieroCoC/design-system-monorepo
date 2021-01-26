import React from "react";
// import { Button } from "@mskcc/atoms";
import { Tabs } from "@mskcc/molecules";

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
      {/* <Button label="Test" /> */}
      <Tabs tabs={["tab1", "tab2"]} />
      <h1 className="text-tiny text-primary-base">another text</h1>
      <text className="msk-text-secondary-base">
        <b>test</b>
      </text>
    </div>
  );
}

export default App;
