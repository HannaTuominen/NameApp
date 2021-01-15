import React, {Component} from 'react';

class PersonList extends Component {

  render () {
    return (
      <div>
        <div>
          <button onClick={() => this.props.sortPersonsList("name-asc")}>Sort alpha asc</button>
          <button onClick={() => this.props.sortPersonsList("name-desc")}>Sort alpha desc</button>
        </div>
        <div>
          <button onClick={() => this.props.sortPersonsList("amount-asc")}>Sort amm asc</button>
          <button onClick={() => this.props.sortPersonsList("amount-desc")}>Sort amm desc</button>
        </div>
      </div>
    );
  }
}

export default PersonList;
