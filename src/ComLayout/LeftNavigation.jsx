import React from 'react';

function LeftNavigation() {
  return (
    <nav className="right-nav" style={{ backgroundColor: 'lightyellow', padding: '20px', width: '10%' }}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', justifyContent: 'left' }}>
        <li style={{ margin: '10px 10px' }}>Left Nav Item 1</li>
        <li style={{ margin: '10px 10px' }}>Left Nav Item 2</li>
        <li style={{ margin: '10px 10px' }}>Left Nav Item 3</li>
      </ul>
    </nav>
  );
}

export default LeftNavigation;





