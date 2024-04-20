import React from 'react';

function Component(props) {

  return (
    <div>
    <h2>Component</h2> 
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>State: {props.State}</p>

    </div>
  );
}

export default Component;
