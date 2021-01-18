import React, {Component} from 'react';

class SortOption extends Component {

  render () {
    return (
      <div onClick={() => this.props.sortPersonsList(this.props.sortOption)} style={{cursor: "pointer"}}>
        {this.props.children}
      </div>
    );
  }
}

export default SortOption;
