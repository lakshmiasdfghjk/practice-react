
import React from 'react';

function RightNavigation() {
  return (
    <nav className="right-nav" style={{ backgroundColor: 'lightyellow', padding: '20px', width: '10%' }}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', justifyContent: 'right' }}>
        <li style={{ margin: '10px 10px' }}>Right Nav Item 1</li>
        <li style={{ margin: '10px 10px' }}>Right Nav Item 2</li>
        <li style={{ margin: '10px 10px' }}>Right Nav Item 3</li>
      </ul>
    </nav>
  );
}

export default RightNavigation;

