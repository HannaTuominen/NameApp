import React from 'react';
import SortOption from "../SortOptions/SortOption/SortOption";

import classes from './SortOptions.css';

const SortOptions = (props) => {
  return (
    <div className={classes.sortContainer}>
      <SortOption sortPersonsList={props.sortPersonsList} sortOption={props.sortOption.toLowerCase() + "-asc"} className={classes.arrow}>↑</SortOption>
      <div className={classes.name}>{props.sortOption}</div>
      <SortOption sortPersonsList={props.sortPersonsList} sortOption={props.sortOption.toLowerCase() + "-desc"} className={classes.arrow}>↓</SortOption>
    </div>
  );
};

export default SortOptions;
