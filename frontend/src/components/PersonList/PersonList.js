import React, {Component} from 'react';
import Person from "./Person/Person";
import axios from 'axios';

class PersonList extends Component {
  state = {
      persons: []
  };

  async componentDidMount() {
    await axios.get( process.env.REACT_APP_BACK_URL + '/names/getAll')
      .then( response => {
        console.log(response);
        this.setState( { persons: response.data } );
      } );
  }

  render () {
    let persons = <p>Here is a person</p>;

    persons = this.state.persons.map(person => {
      return <Person
          key = {person.id}
          name = {person.name}
          amount = {person.amount}
        />
    });

    return (
      <div>
        <selection className="Person">
          {persons}
        </selection>

      </div>
    );
  }
}

export default PersonList;
