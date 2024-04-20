import React,{useState} from "react";

function SubmitForm () {
    const [Inputs, setInputs] = useState({});

    const HandleSubmit = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]:value}));
    }

    const HandleChange = (event) => {
        event.preventDefault();
        console.log(Inputs);
    }

    return (
        <form onSubmit={HandleSubmit}>
            <label>
                User name:
                <input type="text" name="Enter your name" value={Inputs.name} onChange={HandleChange}/>
            </label>
            <lable>
                User age:
                <input type="number" name="Enter your age" value={Inputs.age} onChange={HandleChange}/>
            </lable>
            <input type="Submit"/>
        </form>
    );
}

export default SubmitForm;