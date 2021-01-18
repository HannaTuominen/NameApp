import React, {Component} from 'react';
import Person from "./Person/Person";
import classes from "./PersonList.css";
import SortOption from "../SortOption/SortOption";

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
        <table style={{width: '100%', border: '1px solid #eee'}}>
          <thead style={{border: '1px solid #eee'}}>
          <tr style={{border: '1px solid #eee'}}>
            <th>
              <SortOption sortPersonsList={this.props.sortPersonsList} sortOption={"name-asc"}>↑</SortOption>
              <div>Name</div>
              <SortOption sortPersonsList={this.props.sortPersonsList} sortOption={"name-desc"}>↓</SortOption>
            </th>
            <th>
              <SortOption sortPersonsList={this.props.sortPersonsList} sortOption={"amount-asc"}>↑</SortOption>
              <div>Amount</div>
              <SortOption sortPersonsList={this.props.sortPersonsList} sortOption={"amount-desc"}>↓</SortOption>
            </th>
          </tr>
          </thead>
          <tbody>
          {persons}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PersonList;
