import React from 'react';

import classes from './Person.css';

const person = (props) => (
    <div className={classes.Person}>
      <div className={classes.Name}>Name: {props.name}</div>
      <div className={classes.Amount}>Amount: {props.amount}</div>
    </div>
);

export default person;
