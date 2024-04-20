import React from 'react';

const Buttons = ({ color, onClick, label }) => {
  return (
    <button style={{ backgroundColor: color, padding: '10px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Buttons;
