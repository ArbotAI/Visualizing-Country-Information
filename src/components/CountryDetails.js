import React from 'react';
import Flag from './Flag';
import Borders from './Borders';

const CountryDetails = ({ country, onBorderClick }) => {
  if (!country) return null;

  return (
    <div className="card p-4 my-4 shadow-sm">
      <Flag flag={country.flag} name={country.name} />
      <h2>{country.name}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region/Subregion:</strong> {country.region} / {country.subregion}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Coordinates:</strong> {country.coordinates.latitude}, {country.coordinates.longitude}</p>
      <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
      <p><strong>Currency:</strong> {country.currency}</p>
      <p><strong>Languages:</strong> {country.languages.join(', ')}</p>

      <Borders borders={country.borders} onSelect={onBorderClick} />
    </div>
  );
};

export default CountryDetails;
