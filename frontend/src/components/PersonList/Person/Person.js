import React from 'react';
const person = (props) => (
    <tr>
      <td>{props.name}</td>
      <td>{props.amount}</td>
    </tr>
);

export default person;
