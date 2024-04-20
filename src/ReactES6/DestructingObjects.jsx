import React from "react";

  function Destructing(){
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }

  myVehicle(vehicleOne)
  
  function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
  return (
    <div>
      <p>show: {message}</p>
    </div>
  );
}
}
  export default Destructing;