import React, { useState, useEffect } from "react";
import axios from "axios";
const CountriesDropdown = ({ selectedCountry }) => {
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    selectedCountry(e.target.value);
  };
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((res) => setCountries(res.data));
  }, []);

  const selectItems = () => {
    let items = [];
    console.log(countries);
    countries.forEach((country) =>
      items.push(
        <option key={country.ISO2} value={country.Country}>
          {country.Country}
        </option>
      )
    );
    return items;
  };
  let countryList = selectItems();
  return (
    <div className="form-group">
      <label htmlFor="countries" className="text-muted">
        Select Country :
      </label>
      <select onChange={handleChange} className="form-control" required>
        {countryList}
      </select>
    </div>
  );
};

export default CountriesDropdown;
