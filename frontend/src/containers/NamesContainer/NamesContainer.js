import React, { Component } from 'react';
import PersonList from "../../components/PersonList/PersonList";
import axios from "axios";
import classes from './NamesContainer.css';
import LoadingIndicator from "../../components/UI/LoadingIndicator/LoadingIndicator";
import Auxiliary from "../../hoc/Auxiliary";
import SearchBar from "../../components/SearchBar/SearchBar";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";


class NamesContainer extends Component {
  state = {
    persons: [],
    totalAmountOfPersons: null,
    filteredPersons: [],
    isLoading: false,
    error: null,
    displayNameNotFound: false
  };

  async componentDidMount() {
    this.setState({isLoading: true});
    await axios.get( '/api/names/getAlls')
      .then( response => {
        this.setState( {
          persons: response.data,
          filteredPersons: response.data,
          totalAmountOfPersons: this.countAllPersons(response.data),
          isLoading: false
        } );
      } )
      .catch((error) => {
        this.setState({isLoading: false, error: error.message});
      });
  }

  sortPersonsList = (type) => {
    let newPersonsArray = [...this.state.filteredPersons];

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
    if(results.length > 0 ) {
      this.setState({filteredPersons: results, displayNameNotFound: false});
    }else {
      this.setState({filteredPersons: results, displayNameNotFound: true});
    }
  };

  clearError = () => {
    this.setState({loading: false, error: null});
  };

  render() {
    return (
      <Auxiliary>
        {this.state.error &&
          <ErrorModal
            show={this.state.error}
            closeModal={this.clearError}>
            {this.state.error}
          </ErrorModal>}
        <div className={classes.Container}>
          <div>
            <h1>The most popular names</h1>
          </div>
          <div>
            <p>The total amount of names currently in this list is: {this.state.totalAmountOfPersons}</p>
          </div>
          <SearchBar handleSearchChange={this.handleSearchChange}
            displayNameNotFound={this.state.displayNameNotFound}
            loading={this.state.isLoading}/>
          {this.state.isLoading ?
            <div><LoadingIndicator height={"50px"}/></div>:
            <Auxiliary>
              <PersonList
                persons={this.state.filteredPersons}
                sortPersonsList={this.sortPersonsList}
                handleSearchChange={this.handleSearchChange}/>
            </Auxiliary>
         }
        </div>
      </Auxiliary>
    );
  }
}

export default NamesContainer;
