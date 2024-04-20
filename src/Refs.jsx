import React, { useRef } from 'react';

function MyComponent() {
  
  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.style.backgroundColor = 'blue';
  };

  return (
    <div>
      <div ref={myRef}>Hello, world!</div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default MyComponent;
