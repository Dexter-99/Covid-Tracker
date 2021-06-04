import React, { useEffect, useState } from "react";
import axios from "axios";
import IndianTableData from "./IndianTableData";
import ChartsIndia from "./ChartsIndia";
const IndiaTracker = () => {
  const [indianData, setIndianData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
      )
      .then((res) => setIndianData(res.data.data.statewise));
  }, []);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5" style={{ color: "#5e35b1" }}>
        Indian Statistics :
      </h2>
      <IndianTableData data={indianData} />
      <ChartsIndia indianData={indianData} />
    </div>
  );
};

export default IndiaTracker;
