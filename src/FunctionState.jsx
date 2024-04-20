import React, { useState } from "react";

function Counter(){
    let [count, setcount] = useState(0);
    setcount(++count);
return (
    <div>
    <h2>Count Value</h2>
    <button onClick={() => {}}>Change</button>
    </div>
);
}

export default Counter;