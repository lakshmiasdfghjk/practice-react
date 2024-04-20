import React, { useState } from 'react';

function Counter() {
  // State to track the count
  const [count, setCount] = useState(0);

  // Event handler function for the button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Button with onClick event */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
