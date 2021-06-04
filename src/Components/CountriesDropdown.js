import React, { useState, useEffect } from "react";
import axios from "axios";
const CountriesDropdown = ({ selectedCountry }) => {
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    selectedCountry(e.target.value);
  };
  useEffect(() => {
    axios
      .get("https://www.trackcorona.live/api/countries")
      .then((res) => setCountries(res.data.data));
  }, []);

  const selectItems = () => {
    let items = [];
    console.log(countries);
    countries.forEach((country) =>
      items.push(
        <option key={country.country_code} value={country.country_code}>
          {country.location}
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
