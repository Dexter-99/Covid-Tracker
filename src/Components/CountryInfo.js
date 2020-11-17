import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader.js";
import Charts from "./Charts";
const CountryInfo = ({ country }) => {
  const [covidData, setCovidData] = useState("");
  const [countryChartData, setCountryChartData] = useState([]);

  const getData = () => {
    // console.log(country);
    document.getElementById("data").style.display = "none";
    document.getElementById("loader").style.display = "block";
    setTimeout(() => {
      document.getElementById("data").style.display = "block";
      document.getElementById("loader").style.display = "none";
    }, 2000);
    axios
      .get("https://api.covid19api.com/total/country/" + country)
      .then((res) => res.data)
      .then((data) => {
        setCountryChartData(data);
        const index = data.length - 1;
        console.log(data[index]);
        setCovidData(data[index]);
      });
  };

  return (
    <div className="w-100">
      <button onClick={getData} className="btn btn-secondary ml-auto w-100">
        Get Statistics
      </button>
      <Loader />
      <div class="container mt-5" id="data" style={{ display: "none" }}>
        <div
          class="row bg-white border border-muted"
          style={{ borderRadius: "10px" }}
        >
          <div class="col-sm">
            <div class="card-body">
              <h4 className="text-center" style={{ color: "#5e35b1" }}>
                Confirmed Cases :
              </h4>
              <p className="lead text-muted text-center">
                {covidData.Confirmed}
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div class="card-body">
              <h4 className="text-danger text-center">Active Cases :</h4>
              <p className="lead text-muted text-center">{covidData.Active}</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="card-body">
              <h4 className="text-success text-center">Recovered Cases :</h4>
              <p className="lead text-muted text-center">
                {covidData.Recovered}
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div class="card-body">
              <h4 className="text-muted text-center">Total Deaths :</h4>
              <p className="lead text-muted text-center">{covidData.Deaths}</p>
            </div>
          </div>
        </div>
        <div>
          <Charts countryChartData={countryChartData} />
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
