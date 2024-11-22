import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StartRaiting from "./StartRaiting";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRaiting
      maxRaiting={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defauRating={3}
    ></StartRaiting> */}
    {/* <Test></Test> */}
  </React.StrictMode>
);
