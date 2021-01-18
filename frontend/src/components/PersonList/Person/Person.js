import React from 'react';

import classes from './Person.css';

const person = (props) => (
    <tr className={classes.Person}>
      <td>{props.name}</td>
      <td>{props.amount}</td>
    </tr>
);

export default person;
