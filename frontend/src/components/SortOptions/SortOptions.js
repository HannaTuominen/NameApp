import React from 'react';
import SortOption from "../SortOptions/SortOption/SortOption";

import classes from './SortOptions.css';

const SortOptions = (props) => {
  return (
    <div className={classes.SortContainer}>
      <SortOption sortPersonsList={props.sortPersonsList} sortOption={props.sortOption.toLowerCase() + "-asc"} className={classes.Arrow}>↑</SortOption>
      <div className={classes.Name}>{props.sortOption}</div>
      <SortOption sortPersonsList={props.sortPersonsList} sortOption={props.sortOption.toLowerCase() + "-desc"} className={classes.Arrow}>↓</SortOption>
    </div>
  );
};

export default SortOptions;
