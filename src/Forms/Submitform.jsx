import React, { useState } from "react";

function SubmitForm() {
  const [Data, setData] = useState({
    Username: "",
    email: "",
    message: "",
    gender: ""
  });

  const { Username, email, message, gender } = Data;

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          name="Username"
          value={Username}
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={gender} onChange={handleChange} >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;
