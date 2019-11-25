import React from "react";
import ReactDOM from "react-dom";
//import { Connector } from "react";
import * as serviceWorker from "./serviceWorker";
import ConnectionController from "./connectionData.js";

ReactDOM.render(<ConnectionController />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
