import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ countries }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const match = countries.find(c => c.name.toLowerCase() === query.toLowerCase());
    if (match) navigate(`/country/${match.name}`);
    else alert('Country not found!');
  };

  return (
    <form className="d-flex mb-4" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
