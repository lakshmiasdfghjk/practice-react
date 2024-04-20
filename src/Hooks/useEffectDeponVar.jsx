import { useState, useEffect } from "react";

function Counter () {
    const[count, setcount] = useState(0);
    const[calculation, setcalculation] = useState(0);

    useEffect(() =>{
        setcalculation (() => count * 2);
    }, [count]);

    return (
        <>
        <p>count: {count}</p>
        <button onClick = {() => setcount((c) => c + 1)}>+</button>
        <p>calculation: {calculation}</p>
        </>
    );
}

export default Counter;