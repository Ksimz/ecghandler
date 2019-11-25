import React, { Component } from "react";
import { Connector, subscribe } from "react-mqtt";
import Chart from "./App";

//const MessageContainer = subscribe({ topic: "ecg" })(Chart); //subscription to topic

/*function MessageContainer() {
  return subscribe({ topic: "ecg" })(Chart);
}*/

class ConnectionController extends Component {
  componentDidMount() {
    subscribe({ topic: "ecg" })(Chart);
  }

  render() {
    return (
      <Connector mqttProps="ws://127.0.0.1:8080">
        <Chart />
      </Connector>
    ); //mqqt connection over a websocket at port 8080
  }
}

/*const MessageList = props => (
  <Chart data={props}/>
);

//export default ConnectionController;
export default subscribe({
  topic: "ecg"
})(MessageList);*/

export default ConnectionController;
