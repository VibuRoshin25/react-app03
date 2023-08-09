import React from "react";
import ReactDOM from "react-dom";

const NAME = "VIBU";
var DATE = new Date();
ReactDOM.render(
  <div>
    <p>Created by {NAME}</p>
    <p>Copyright {DATE.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
