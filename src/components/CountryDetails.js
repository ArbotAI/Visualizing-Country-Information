import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/countrymockdata.json';
import Flag from './Flag';
import Borders from './Borders';

const CountryDetails = ({ countryName: staticName }) => {
  const { countryName } = useParams();
  const selectedName = staticName || countryName;
  const country = data.countries.find(c => c.name.toLowerCase() === selectedName.toLowerCase());

  if (!country) return <p>Country not found.</p>;

  return (
    <div className="card p-4 shadow-sm">
      <h2>{country.name}</h2>
      <Flag url={country.flag} name={country.name} />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region} / {country.subregion}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Coordinates:</strong> {country.coordinates.latitude}, {country.coordinates.longitude}</p>
      <Borders borders={country.borders} />
      <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
      <p><strong>Currency:</strong> {country.currency}</p>
      <p><strong>Languages:</strong> {country.languages.join(', ')}</p>
    </div>
  );
};

export default CountryDetails;
