import React from 'react';
import SortOption from "../SortOptions/SortOption/SortOption";
import Auxiliary from "../../hoc/Auxiliary";

const SortOptions = (props) => {
  return (
    <Auxiliary>
      <SortOption sortPersonsList={props.sortPersonsList} sortOption={props.sortOption.toLowerCase() + "-asc"}>↑</SortOption>
      <div>{props.sortOption}</div>
      <SortOption sortPersonsList={props.sortPersonsList} sortOption={props.sortOption.toLowerCase() + "-desc"}>↓</SortOption>
    </Auxiliary>
  );
};

export default SortOptions;
