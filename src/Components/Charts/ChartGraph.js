import React from "react";

import { Line } from "react-chartjs-2";
const ChartGraph = ({
  chartCases,
  chartTime,
  chartBorderColor,
  chartBackgroundColor,
  chartPointBackgroundColor,
  chartPointBorderColor,
}) => {
  // console.log(chartCases);
  // console.log(chartTime);
  const data = {
    labels: chartTime,
    datasets: [
      {
        label: "Confirmed Cases",
        data: chartCases,
        borderColor: chartBorderColor,
        backgroundColor: chartBackgroundColor,
        pointBackgroundColor: chartPointBackgroundColor,
        pointBorderColor: chartPointBorderColor,
      },
    ],
  };
  return <Line data={data} />;
};

export default ChartGraph;
