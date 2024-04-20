import React,{useState} from "react";

function Car () {
    const [brand, setbrand] = useState("Ford");
    const [model, setmodel] = useState("Mustang");
    const [color, setcolor] = useState("Red");
    const [year, setyear] = useState(2023);

    return (
        <>
        <h1>My {brand}</h1>
        <p>It is a {color} {model} from {year}</p>
        </>
    );
}

export default Car;