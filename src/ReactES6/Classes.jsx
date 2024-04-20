import React from "react";


class Car {
  constructor(name) {
    this.brand = name;
  }
}

// function Classes() {

function Present (){
  
  const mycar = new Car("Ford");

  return (
    <div>
      {/* {mycar.brand} */}
      {'I have a '  +  mycar.brand}
    </div>
  );
}
// }

// export default Classes;
export default Present;

