import React from 'react';


// // Parent component
// function ParentComponent() {
//   // Data to pass to the child component
//   const name = "John";
//   const age = 30;

//   // Render the child component and pass data to it via props
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <ChildComponent name={name} age={age} />
//     </div>
//   );
// }

// // Child component
// function ChildComponent(props) {
//   // Access data passed from the parent component via props
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// export default ParentComponent;


function User (props) {
  return (
    <>
    <h1>This is User Component</h1>
    <h2>Username : {props.name}</h2>
    <h2>Age: {props.age}</h2>
    <h2>Salary: {props.salary}</h2>
    </>
  )

}
export default User;

