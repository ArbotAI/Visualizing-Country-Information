import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CountryDetails from './components/CountryDetails';
import SearchBar from './components/SearchBar';
import CountryFilter from './components/CountryFilter';
import countryData from './data/countrymockdata.json';

const App = () => {
  const countries = countryData.countries;

  return (
    <Router>
      <Header />

      <div className="container my-4">
        {/* Search and Filter side by side */}
        <div className="row">
          <div className="col-md-6">
            <SearchBar countries={countries} />
            <Routes>
          <Route path="/" element={<CountryDetails countryName="Afghanistan" />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
        </Routes>
          </div>
          <div className="col-md-6">
            <CountryFilter countries={countries} />
          </div>
        </div>

        {/* Dynamic routing for country display */}
        
      </div>

      <Footer />
    </Router>
  );
};

export default App;
