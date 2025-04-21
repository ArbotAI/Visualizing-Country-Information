import React from 'react';

const Borders = ({ borders, onSelect }) => {
  if (!borders || borders.length === 0) return <p>No border countries.</p>;

  return (
    <div>
      <h5>Borders:</h5>
      {borders.map((border, index) => (
        <button key={index} className="btn btn-outline-secondary btn-sm me-2 mb-2" onClick={() => onSelect(border)}>
          {border}
        </button>
      ))}
    </div>
  );
};

export default Borders;
