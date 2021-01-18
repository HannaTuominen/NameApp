import React from 'react';
import Person from "./Person/Person";
import classes from "./PersonList.css";
import SortOptions from "../SortOptions/SortOptions";

const PersonList = (props) => {
  const persons = props.persons.map(person => {
    return <Person
        key = {person.id}
        name = {person.name}
        amount = {person.amount}
      />
  });

  return (
    <div className={classes.PersonList}>
      <table style={{width: '100%', border: '1px solid #eee'}}>
        <thead style={{border: '1px solid #eee'}}>
        <tr style={{boxShadow:"0 1px 1px #ccc"}}>
          <th>
            <SortOptions sortPersonsList={props.sortPersonsList} sortOption={"Name"}/>
          </th>
          <th>
            <SortOptions sortPersonsList={props.sortPersonsList} sortOption={"Amount"}/>
          </th>
        </tr>
        </thead>
        <tbody>
        {persons}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
