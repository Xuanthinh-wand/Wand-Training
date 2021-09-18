import React, { useContext } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { ItemProvider } from "./context/ItemContext";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <ItemProvider>
        <AddItem />
        <ItemList />
      </ItemProvider>
    </div>
  );
}
