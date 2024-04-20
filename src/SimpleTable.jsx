import React from 'react';

const SimpleTable = ({ data, editFun, deleteFun }) => {
  return (
    <table>
      <thead>
        <tr>   
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
            <td onClick={() => editFun(item.name)}>Eidt</td>
            <td onClick={() => deleteFun(item.name)}>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
