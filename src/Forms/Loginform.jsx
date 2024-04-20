import React, { useState } from "react";

function Loginform() {
  const [Data, setData] = useState({
    Username: "",
    email: "",
    password: "",
    Confirmpassword: ""
  });

  const { Username, email, password, Confirmpassword } = Data;

  const HandlerSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };

  const HandlerChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={HandlerSubmit}>
        <label>
          User name:
          <input
            placeholder="Enter your name"
            type="text"
            name="Username"
            value={Username}
            onChange={HandlerChange}
          />
        </label>
        <br />
        <label>
          email:
          <input
            placeholder="Enter your eamil"
            type="email"
            name="email"
            value={email}
            onChange={HandlerChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            value={password}
            onChange={HandlerChange}
          />
        </label>
        <br />
        <label>
          Confirm password:
          <input
            placeholder="Confirm your password"
            type="password"
            name="Confirmpassword"
            value={Confirmpassword}
            onChange={HandlerChange}
          />
        </label>
        <br />
        <button type="Submit">Login</button>
      </form>
    </div>
  );
}

export default Loginform;
