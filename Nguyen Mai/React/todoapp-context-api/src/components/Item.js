import React from "react";

const Item = ({ item, removeItem }) => {
  return (
    <div className="row">
      <div className="col">
        <h4>{item}</h4>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => {
          removeItem(item);
        }}
      >Delete</button>
    </div>
  );
};

export default Item;
