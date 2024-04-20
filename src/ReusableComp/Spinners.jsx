import React from 'react';

const Spinner = ({ size, color }) => {
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: color,
    borderRadius: '50%',
    width: size,
    height: size,
    animation: 'spin 1s linear infinite'
  };

  return (
    <div style={spinnerStyle}></div>
  );
};

export default Spinner;
