import React, { useState } from 'react';

  
  const SimpleTable = ({data, editfun, deletefun}) => {


  return (
    <div>
      <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        <tbody>
        
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>
                <button onClick={() => editfun(item.id)}>Edit</button>
                <button onClick={() => deletefun(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
