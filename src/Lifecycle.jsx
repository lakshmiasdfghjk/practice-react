import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Timer: ${seconds} seconds`;

    // Clean up function (equivalent to componentWillUnmount)
    return () => {
      console.log('Unmounting Timer component');
    };
  });

  // Increment seconds every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that this effect runs only once (on mount)

  return (
    <div>
      <h1>Timer</h1>
      <p>{seconds} seconds elapsed</p>
    </div>
  );
}

export default Timer;
