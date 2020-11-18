import React from "react";
// import axios from "axios";
import ChartGraph from "./Charts/ChartGraph";
const Charts = ({ countryChartData }) => {
  console.log(countryChartData);
  let confirmedCases = [];
  let activeCases = [];
  let recoveredCases = [];
  let totalDeaths = [];
  confirmedCases = countryChartData.map((info) => {
    return info.Confirmed;
  });
  activeCases = countryChartData.map((info) => {
    return info.Active;
  });
  recoveredCases = countryChartData.map((info) => {
    return info.Recovered;
  });
  totalDeaths = countryChartData.map((info) => {
    return info.Deaths;
  });
  let chartTime = [];
  chartTime = countryChartData.map((info) => {
    var d = new Date(info.Date);
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    const date = month + "/" + day + "/" + year;

    return date;
  });

  return (
    <div className="container mt-5 py-5">
      <div className="d-flex flex-column ">
        <div className="w-75 mx-auto outer">
          <div className="chart">
            <h3 className="text-center">Confirmed Cases</h3>
            <ChartGraph
              chartCases={confirmedCases}
              chartTime={chartTime}
              casesType="Confirmed Cases"
              chartBorderColor="#5e35b1"
              chartBackgroundColor="#D1C4E9"
              chartPointBackgroundColor="#7E57C2"
              chartPointBorderColor="#311B92"
            />
          </div>
        </div>
        <div className="w-75 mx-auto outer ">
          <div className="chart">
            <h3 className="text-center">Active Cases</h3>
            <ChartGraph
              chartCases={activeCases}
              chartTime={chartTime}
              casesType="Active Cases"
              chartBorderColor="#B71C1C"
              chartBackgroundColor="#FFCDD2"
              chartPointBackgroundColor="#EF5350"
              chartPointBorderColor="#B71C1C"
            />
          </div>
        </div>
        <div className="w-75 mx-auto outer ">
          <div className="chart">
            <h3 className="text-center">Recovered Cases</h3>
            <ChartGraph
              chartCases={recoveredCases}
              chartTime={chartTime}
              casesType="Recovered Cases"
              chartBorderColor="#1B5E20"
              chartBackgroundColor="#C8E6C9"
              chartPointBackgroundColor="#81C784"
              chartPointBorderColor="#1B5E20"
            />
          </div>
        </div>
        <div className="w-75 mx-auto outer">
          <div className="chart">
            <h3 className="text-center">Total Deaths</h3>
            <ChartGraph
              chartCases={totalDeaths}
              chartTime={chartTime}
              casesType="Total Deaths"
              chartBorderColor="#212121"
              chartBackgroundColor="#BDBDBD"
              chartPointBackgroundColor="#BDBDBD"
              chartPointBorderColor="#212121"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
