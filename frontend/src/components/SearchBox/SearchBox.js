import React, {Component} from 'react';

class PersonList extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value}, this.props.handleSearchChange(event.target.value));
    // console.log(this.state.searchTerm);
  };

  render () {
    return (
      <div>
      </div>
    );
  }
}

export default PersonList;
