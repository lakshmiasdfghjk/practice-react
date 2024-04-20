import React from 'react';

const ColorCard = ({ color, title, content }) => {
  const cardStyle = {
    backgroundColor: color,
    padding: '2px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    marginBottom: '20px',
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ColorCard;
