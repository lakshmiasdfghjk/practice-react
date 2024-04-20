import React,{useState} from "react";

function FavoriteColor () {
    const [Color, setColor] = useState("red");

    return (
        <>
        <h1>My favorite color is {Color}</h1>
        <button 
        type="button"
        onClick = {() => {setColor("Blue")}}>Click</button>
        </>
    );
}

export default FavoriteColor;