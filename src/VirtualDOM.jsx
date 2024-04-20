import React,{useState} from "react";

function Counter(){
    const[count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    };
    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
export default Counter;