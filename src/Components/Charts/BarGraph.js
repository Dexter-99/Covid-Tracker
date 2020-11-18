import React from "react";

import { Bar } from "react-chartjs-2";
const BarGraph = ({ chartCases, states, casesType, chartBackgroundColor }) => {
  // console.log(chartCases);
  console.log(states);
  const data = {
    labels: states,
    datasets: [
      {
        label: casesType,
        data: chartCases,
        backgroundColor: chartBackgroundColor,
      },
    ],
  };
  return <Bar data={data} options={{ maintainAspectRatio: false }} />;
};

export default BarGraph;
