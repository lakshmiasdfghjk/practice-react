import React,{useState} from "react";

function Cars () {
    const [Car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "Red",
        year: 2023
    });

    return (
        <>
        <h1>My {Car.brand}</h1>
        <p>It is a {Car.color} {Car.model} from {Car.year}</p>
        </>
    );
}

export default Cars;