import React, { useState } from 'react';
import Header from './Header';
import LeftNavigation from './LeftNavigation';
import Buttons from './Buttons';
import ColorCard from './Cards'; 
import Spinner from './Spinners'; 

function Layout() {
    const [activeItem, setActiveItem] = useState('Buttons');

    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
    };
  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            
            <LeftNavigation activeItem={activeItem} onItemClick={handleItemClick} />
            <div className="main-content">
              {activeItem === 'Buttons' && <Buttons />}
              {activeItem === 'Cards' && <Cards />}
              {activeItem === 'Spinners' && <Spinners />} 
            </div>
        </div>
    );
}

// Define the Cards component
const Cards = () => {
    return (
        <div>
            <ColorCard color="#3498db" title="Blue Card" content="This is a blue card." />
            <ColorCard color="#2ecc71" title="Green Card" content="This is a green card." />
            <ColorCard color="#e74c3c" title="Red Card" content="This is a red card." />
        </div>
    );
}

// Define the Spinners component
const Spinners = () => {
    return (
        <div>
            <h1>Loading...</h1>
            <Spinner size="40px" color="#3498db" />
        </div>
    );
};

export default Layout;



