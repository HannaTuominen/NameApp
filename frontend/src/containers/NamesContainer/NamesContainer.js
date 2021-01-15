import React, { Component } from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import PersonList from "../../components/PersonList/PersonList";
import axios from "axios";

class NamesContainer extends Component {
  state = {
    persons: [],
    totalAmountOfPersons: null
  };

  async componentDidMount() {
    await axios.get( '/api/names/getAll')
      .then( response => {
        console.log(response);
        this.setState( {
          persons: response.data,
          totalAmountOfPersons: this.countAllPersons(response.data)
        } );
      } );
  }

  sortPersonsList = (type) => {
    let newPersonsArray = [...this.state.persons];

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
    console.log(this.state.persons);
    console.log(newPersonsArray);

    this.setState({persons: newPersonsArray});
  };

   countAllPersons = (persons) => {
    let personsArray = [...persons];
    let amount = 0;

     for (const person of personsArray) {
      amount += person.amount;
    }
    return amount;
  };

  render() {
    return (
      <Auxiliary>
        <div>
          <PersonList persons={this.state.persons} sortPersonsList={this.sortPersonsList}/>
        </div>
        <div>
          {this.state.totalAmountOfPersons}
        </div>
        <div>
          amount of the names given as a parameter
        </div>
      </Auxiliary>
    );
  }
}

export default NamesContainer;
