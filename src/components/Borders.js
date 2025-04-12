import React from 'react';
import { Link } from 'react-router-dom';

const Borders = ({ borders }) => {
  return (
    <div>
      <strong>Borders:</strong>
      {borders.length ? (
        <ul>
          {borders.map((border, idx) => (
            <li key={idx}>
              <Link to={`/country/${border}`}>{border}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <span> None</span>
      )}
    </div>
  );
};

export default Borders;
