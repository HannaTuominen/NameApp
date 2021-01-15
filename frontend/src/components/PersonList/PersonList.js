import React, {Component} from 'react';
import Person from "./Person/Person";
import classes from "./PersonList.css";
import SortOptions from "../SortOptions/SortOptions";

class PersonList extends Component {

  render () {
    let persons = this.props.persons.map(person => {
      return <Person
          key = {person.id}
          name = {person.name}
          amount = {person.amount}
        />
    });

    return (
      <div className={classes.PersonList}>
        <div>
          <SortOptions sortPersonsList={this.props.sortPersonsList}/>
        </div>
        <div>
          {persons}
        </div>
      </div>
    );
  }
}

export default PersonList;
