import React, { Component } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

class Chart extends Component {
  constructor(props) {
    super(props);

    ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    //this.Transporter=this.Transporter.bind(this);
    this.state = {
      dataList: []
    };
    this.state.dataList.push({ time: this.props.time, ecg: this.props.ecg });
  }

  render() {
    var chartConfigs = {
      type: "line",
      width: 700,
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Health Data",
          xAxisName: "Time",
          yAxisName: "ECG Data",
          theme: "fusion",
          labelDisplay: "Auto",
          useEllipsesWhenOverflow: "0"
        },
        data: this.state.dataList
      }
    };

    return (
      <div style={{ padding: 20 }}>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>ECG Data Visualiser Client</h1>
        </div>

        <ReactFC width="700" {...chartConfigs} />
      </div>
    );
  }
}

export default Chart;
