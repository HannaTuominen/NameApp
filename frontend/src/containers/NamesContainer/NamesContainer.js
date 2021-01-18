import React, { Component } from 'react';
import PersonList from "../../components/PersonList/PersonList";
import axios from "axios";
import classes from './NamesContainer.css';


class NamesContainer extends Component {
  state = {
    persons: [],
    totalAmountOfPersons: null,
    filteredPersons: []
  };

  async componentDidMount() {
    await axios.get( '/api/names/getAll')
      .then( response => {
        this.setState( {
          persons: response.data,
          filteredPersons: response.data,
          totalAmountOfPersons: this.countAllPersons(response.data)
        } );
      } );
  }

  sortPersonsList = (type) => {
    let newPersonsArray = [...this.state.filteredPersons];

    console.log(type);
    switch(type) {
      case "name-asc":
        newPersonsArray.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        break;
      case "name-desc":
        newPersonsArray.sort((b,a) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        break;
      case "amount-asc":
        newPersonsArray.sort((a,b) => (a.amount > b.amount) ? 1 : ((b.amount > a.amount) ? -1 : 0));
        break;
      case "amount-desc":
        newPersonsArray.sort((b,a) => (a.amount > b.amount) ? 1 : ((b.amount > a.amount) ? -1 : 0));
        break;
      default:
        throw new Error('Unknown sorting type.');
    }
    console.log(newPersonsArray);

    this.setState({persons: newPersonsArray, filteredPersons: newPersonsArray});

  };

   countAllPersons = (persons) => {
    let personsArray = [...persons];
    let amount = 0;

     for (const person of personsArray) {
      amount += person.amount;
    }
    return amount;
  };

  handleSearchChange = (event) => {
    const search = event.target.value;
    const results = this.state.persons.filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({filteredPersons: results});
  };

  render() {
    return (
      <div className={classes.Container}>
        <div>
          <h1>The most popular names</h1>
        </div>
        <div>
          The total amount of names currently in this list is: {this.state.totalAmountOfPersons}
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.notInputDivs}></div>
          <div className={classes.inputDiv}>
            <input
              type="text"
              placeholder="Search for a name..."
              onChange={this.handleSearchChange}
              className={classes.input}/>
          </div>
          <div className={classes.notInputDivs}></div>
        </div>
        {this.state.filteredPersons.length < 1 ?  <div className={classes.missing}><p>Name not found...</p></div> : <div className={classes.notMissing}></div>}
        <PersonList
          persons={this.state.filteredPersons}
          sortPersonsList={this.sortPersonsList}
          handleSearchChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default NamesContainer;
