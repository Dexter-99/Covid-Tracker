import React, { useState } from "react";
import CountriesDropdown from "./CountriesDropdown";
import CountryInfo from "./CountryInfo";

const Tracker = () => {
  const [country, setCountry] = useState("");

  const selectedCountry = (child) => {
    console.log();
    setCountry(child);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: "#5e35b1" }}>
        Covid Statistics
      </h1>
      <CountriesDropdown selectedCountry={selectedCountry} />
      <CountryInfo country={country} />
    </div>
  );
};

export default Tracker;
