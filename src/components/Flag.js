import React from 'react';

const Flag = ({ flag, name }) => (
  <div className="text-center">
    <img
      src={flag}
      alt={`${name} flag`}
      className="img-fluid my-3"
      style={{ maxHeight: '150px' }}
    />
  </div>
);

export default Flag;
