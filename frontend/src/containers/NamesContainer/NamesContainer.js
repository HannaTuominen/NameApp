import React, { Component } from 'react';
import Auxiliary from "../../hoc/Auxiliary";

class NamesContainer extends Component {
  render() {
    return (
      <Auxiliary>
        <div>
          List of names
        </div>
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
