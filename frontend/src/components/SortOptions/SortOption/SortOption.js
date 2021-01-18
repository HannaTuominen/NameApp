import React from 'react';

const SortOption = (props) => {
  return (
    <div onClick={() => props.sortPersonsList(props.sortOption)} style={{cursor: "pointer", paddingRight: "5px"}}>
      {props.children}
    </div>
  );
};

export default SortOption;
