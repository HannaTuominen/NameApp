import React, { Component } from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import PersonList from "../../components/PersonList/PersonList";

class NamesContainer extends Component {
  render() {
    return (
      <Auxiliary>
        <PersonList />
        <div>
          Total amount of all the names
        </div>
        <div>
          amount of the names given as a parameter
        </div>
      </Auxiliary>
    );
  }
}

export default NamesContainer;
