import React from 'react';

const Flag = ({ url, name }) => (
  <div className="text-center my-3">
    <img src={url} alt={`${name} flag`} className="img-fluid" style={{ maxHeight: '150px' }} />
  </div>
);

export default Flag;
