import React from 'react';

const SortOption = (props) => {
  return (
    <div onClick={() => props.sortPersonsList(props.sortOption)} style={{cursor: "pointer"}}>
      {props.children}
    </div>
  );
};

export default SortOption;
