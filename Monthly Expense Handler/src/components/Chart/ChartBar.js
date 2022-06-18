import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  const barValue =
    props.maxValue > 0
      ? Math.round((props.value / props.maxValue) * 100) + "%"
      : "0%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barValue }} />
      </div>
      <div className="chart-bar__label" style={{ width: "100%" }}>
        {props.label}
      </div>
    </div>
  );
}
export default ChartBar;
