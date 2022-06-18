import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const data = props.filteredData;

//   console.log(data);

  const exp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i of data) {
    let amt = i.amount;
    let mnth = i.date.getMonth();
    exp[mnth] += amt;
  }

//   console.log(exp);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthlyData = exp.map((element, index) => ({
    value: element,
    label: month[index],
  }));

//   console.log(monthlyData);

  return (
    <div>
      <Chart dataPoints={monthlyData} />
    </div>
  );
}
export default ExpensesChart;
