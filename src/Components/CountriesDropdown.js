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
        <option key={country.Slug} value={country.Slug}>
          {country.Country}
        </option>
      )
    );
    return items;
  };

  return (
    <div className="form-group">
      <label htmlFor="countries" className="text-muted">
        Select Country :
      </label>
      <select onChange={handleChange} className="form-control">
        {selectItems()}
      </select>
    </div>
  );
};

export default CountriesDropdown;
