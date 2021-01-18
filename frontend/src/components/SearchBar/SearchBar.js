import React from 'react';
import classes from "./SearchBar.css";
import Auxiliary from "../../hoc/Auxiliary";


const SearchBar = props => (
  <Auxiliary>
  <div className={classes.inputContainer}>
    <div className={classes.notInputDivs}></div>
      <div className={classes.inputDiv}>
      <input
        type="text"
        placeholder="Search for a name..."
        onChange={props.handleSearchChange}
        className={classes.input}
      />
    </div>
    <div className={classes.notInputDivs}></div>
  </div>
  { props.filteredPersonsLength < 1 ?
    <div className={classes.missing}>
      <p>Name not found...</p>
    </div> : <div className={classes.notMissing}></div> }
  </Auxiliary>
);

export default SearchBar;
