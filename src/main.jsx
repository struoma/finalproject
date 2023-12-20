import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Reducer, { initialState } from "./Reducer.jsx";
import { Stateprovider } from "./Stateprovider"; // assuming StateProvider is in the same directory

ReactDOM.createRoot(document.getElementById("root")).render(
  <Stateprovider initialState={initialState} reducer={Reducer}>
    <App />
  </Stateprovider>
);
