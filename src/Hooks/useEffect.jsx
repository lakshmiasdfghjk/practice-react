
import {useState, useEffect} from "react";

function Timer () {
    const[count, setcount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setcount((count)=> count + 1);
        },1000);
    }, []);

    return <h1>I've rendered {count} times</h1>
}

export default Timer;