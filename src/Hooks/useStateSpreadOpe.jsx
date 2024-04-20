import React,{useState} from "react";

function Vehicle () {
    const [Vehicle, setVehicle] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "Red",
        year: 2023
    });

    const updateyear = () => {
        setVehicle(previousState => {
            return {...previousState, year: 2024}
        });
    }

    return (
        <>
        <h1>My {Vehicle.brand}</h1>
        <p>It is a {Vehicle.color} {Vehicle.model} from {Vehicle.year}.</p>
        <button 
        type = "button"
        onClick = {updateyear}>Click</button>
        </>
    );
}

export default Vehicle;