import React,{useState} from "react";

function Myform () {
    const[Name, setName] = useState("");

    const HandleSubmit = (event) => {
        event.preventdefault();
        alert(`The name you entered was: {Name}`);
    }

    return (
        <form onSubmit={HandleSubmit}>
            <lable>
                User name:
                <input type="text" placeholder="Enter your name" value={Name}
                onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" />
            </lable>
        </form>
    );
}

export default Myform;