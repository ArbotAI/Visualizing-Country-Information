import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api';
import CountryDetails from '../components/CountryDetails';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedPopulation, setSelectedPopulation] = useState("All");

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        const countryList = res.data.data;
        setCountries(countryList);
        setFilteredCountries(countryList);

        const afghanistan = countryList.find(c => c.name === "Afghanistan");
        setSelectedCountry(afghanistan);
      })
      .catch(err => {
        console.error("Failed to fetch countries", err);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const match = countries.find(c => c.name.toLowerCase() === value.toLowerCase());
    if (match) setSelectedCountry(match);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    filterCountries(e.target.value, selectedPopulation);
  };

  const handlePopulationChange = (e) => {
    setSelectedPopulation(e.target.value);
    filterCountries(selectedRegion, e.target.value);
  };

  const filterCountries = (region, population) => {
    let filtered = countries;

    if (region !== "All") {
      filtered = filtered.filter(country => country.region === region);
    }

    if (population !== "All") {
      const [min, max] = population.split("-").map(val => parseInt(val, 10));
      filtered = filtered.filter(country => {
        if (min && max) {
          return country.population >= min && country.population <= max;
        } else if (min) {
          return country.population >= min;
        }
        return true;
      });
    }

    setFilteredCountries(filtered);
    setSelectedCountry(filtered[0]);
  };

  const handleBorderClick = (borderName) => {
    const match = countries.find(c => c.name === borderName);
    if (match) setSelectedCountry(match);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="py-4 text-center border-bottom mb-4">
        <h1 className="text-primary">🌍 Country Explorer</h1>
        <p className="text-muted">Explore countries by region, population, or search by name</p>
      </header>

      {/* Search and Filters */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search country..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="All">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedPopulation}
            onChange={handlePopulationChange}
          >
            <option value="All">All Populations</option>
            <option value="0-10000000">Under 10 million</option>
            <option value="10000000-100000000">10M - 100M</option>
            <option value="100000000-1000000000">Over 100M</option>
          </select>
        </div>
      </div>

      {/* Main Layout: Country Details + Filtered Countries */}
      <div className="row">
        {/* Country Details */}
        <div className="col-md-8">
          {selectedCountry && (
            <CountryDetails country={selectedCountry} onBorderClick={handleBorderClick} />
          )}
        </div>

        {/* Filtered Countries List */}
        <div className="col-md-4">
          <h5 className="mb-3">Filtered Countries</h5>
          <div className="overflow-auto" style={{ maxHeight: '70vh' }}>
            {filteredCountries.map((country) => (
              <div
                key={country.name}
                className="card mb-3"
                onClick={() => setSelectedCountry(country)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body d-flex align-items-center">
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{ width: 40, height: 30, marginRight: 10 }}
                  />
                  <div>
                    <strong>{country.name}</strong>
                    <br />
                    <small>{country.region}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 mt-5 border-top">
      </footer>
    </div>
  );
};

export default Home;
