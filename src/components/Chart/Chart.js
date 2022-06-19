import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const expArray = props.dataPoints.map(element => element.value);
    const maxValue = Math.max(...expArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}
export default Chart; 
