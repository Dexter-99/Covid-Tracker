import React from "react";
import BarGraph from "../Components/Charts/BarGraph";
const ChartsIndia = ({ indianData }) => {
  console.log(indianData);
  let states = [];
  let confirmedCases = [];
  let activeCases = [];
  let recoveredCases = [];
  let totalDeaths = [];
  confirmedCases = indianData.map((info) => {
    return info.confirmed;
  });
  activeCases = indianData.map((info) => {
    return info.active;
  });
  recoveredCases = indianData.map((info) => {
    return info.recovered;
  });
  totalDeaths = indianData.map((info) => {
    return info.deaths;
  });
  states = indianData.map((info) => {
    return info.state;
  });

  return (
    <div className="container mt-5 py-5">
      <div className="d-flex flex-column ">
        <div className="w-75 mx-auto">
          <div className="chart">
            <h3 className="text-center">Confirmed Cases</h3>
            <BarGraph
              chartCases={confirmedCases}
              states={states}
              chartBackgroundColor="#D1C4E9"
              casesType="Confirmed Cases"
            />
          </div>
        </div>
        <div className="w-75 mx-auto">
          <div className="chart">
            <h3 className="text-center">Active Cases</h3>
            <BarGraph
              chartCases={activeCases}
              states={states}
              chartBackgroundColor="#FFCDD2"
              casesType="Active Cases"
            />
          </div>
        </div>
        <div className="w-75 mx-auto">
          <div className="chart">
            <h3 className="text-center">Recovered Cases</h3>
            <BarGraph
              chartCases={recoveredCases}
              states={states}
              chartBackgroundColor="#C8E6C9"
              casesType="Recovered Cases"
            />
          </div>
        </div>
        <div className="w-75 mx-auto">
          <div className="chart">
            <h3 className="text-center">Total Deaths</h3>
            <BarGraph
              chartCases={totalDeaths}
              states={states}
              chartBackgroundColor="#BDBDBD"
              casesType="Total Deaths"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsIndia;
