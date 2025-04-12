import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CountryFilter = ({ countries }) => {
  const [region, setRegion] = useState('');
  const navigate = useNavigate();

  const filtered = countries.filter(country =>
    region === '' || country.region === region
  );

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="form-label">Filter by Region:</label>
      <select className="form-select" onChange={handleChange} value={region}>
        <option value="">All</option>
        {[...new Set(countries.map(c => c.region))].map((reg, idx) => (
          <option key={idx} value={reg}>{reg}</option>
        ))}
      </select>

      <div className="mt-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
  {filtered.map(country => (
    <div key={country.name} className="mb-2">
      <button className="btn btn-outline-dark btn-sm rounded-pill" onClick={() => navigate(`/country/${country.name}`)}>
        {country.name}
      </button>
    </div>
  ))}
</div>
    </div>
  );
};

export default CountryFilter;
