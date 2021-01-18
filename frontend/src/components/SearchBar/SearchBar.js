import React from 'react';
import classes from "./SearchBar.css";
import Auxiliary from "../../hoc/Auxiliary";


const SearchBar = props => (
  <Auxiliary>
  <div className={classes.InputContainer}>
    <div className={classes.NotInputDivs}></div>
      <div className={classes.InputDiv}>
      <input
        type="text"
        placeholder="Search for a name..."
        onChange={props.handleSearchChange}
        className={classes.Input}
      />
    </div>
    <div className={classes.NotInputDivs}></div>
  </div>
  {props.displayNameNotFound && !props.loading ?
    <div className={classes.Missing}>
      <p>Name not found...</p>
    </div> : <div className={classes.NotMissing}></div> }
  </Auxiliary>
);

export default SearchBar;
