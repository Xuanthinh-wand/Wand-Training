import React, { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import './Item.css';

const AddItem = () => {
  const [items, setItems] = useContext(ItemContext);
  const [itemText, setItemText] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setItems(prevItems => {
      setItems([...prevItems, itemText]);
      setItemText("");
    });
  };
  return (
    <form onSubmit={handleSubmit} className="add-item">
      <input
        type="text"
        value={itemText}
        onChange={e => {
          setItemText(e.target.value);
        }}
        className="col form-control"
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default AddItem;
