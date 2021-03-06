import React, { useContext } from "react";
import Item from "./Item";
import { ItemContext } from "../context/ItemContext";

const ItemList = () => {
  const [items, setItems] = useContext(ItemContext);
  const removeItem = item => {
    setItems(items.filter(it => it !== item));
  };
  return (
    <div>
      {items.map(item => (
        <Item item={item} removeItem={removeItem} key={item} />
      ))}
    </div>
  );
};

export default ItemList;
