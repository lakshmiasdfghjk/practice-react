import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
  return (
    <div className="left-navigation" style={{ 
        width: '200px', 
        backgroundColor: 'lightgray', 
        padding: '10px', 
        borderRight: '1px solid black'}}>
      <ul style={{listStyleType: "none", padding: "0"}}>
        <li style={{marginBottom: "10px"}}>
          <Link to="/card" style={{textDecoration: "none", color: "black", fontSize: '20px'}}>Card</Link>
        </li>
        <li>
          <Link to="/panel" style={{textDecoration: "none", color: "black", fontSize: '20px'}}>Panel</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
