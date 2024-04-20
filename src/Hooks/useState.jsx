import React, { useState } from "react";

function Mobilebrand() {
  
  const [productname, setName] = useState("Real me 8 pro");
  const [price, setprice] = useState(20000);

  return (
    <div>
      <h1>Product: {productname}</h1>
      <p>Price: {price}</p>
      <input id="pname" />
      {/* <input id="price" /> */}
      <button
        onClick={() => {
            const pname = document.getElementById("pname").value;
            // let mprice = document.getElementById("price").value;
            setName(pname);
            // setName(() => {
            // return"react";
            // })
            // setprice(mprice);
        }}>Update</button>
    </div>
  );
}

export default Mobilebrand;
