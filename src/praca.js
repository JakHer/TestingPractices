import React from "react";
import ReactDom from "react-dom";

const App = () => (
  <div className="wrapper">
    <h1 className="mainHeader">Big Heading</h1>
    <h2 className="secondaryHeader">Medium Heading</h2>
  </div>
);

ReactDom.render(<App />, document.getElementById("root"));
