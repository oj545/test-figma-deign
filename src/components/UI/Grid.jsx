import React from "react";

const Grid = (props) => {
  return <div className="grid">{<div>{props.children}</div>}</div>;
};

export default Grid;
