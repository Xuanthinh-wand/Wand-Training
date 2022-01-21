import "./App.css";
import React, { useState } from "react";
import listTodo from "./components/db/todoList";
import ListTodo from "./components/listContextApi/view/listTodo";
export const ListContext = React.createContext();

function App() {
  let dataTodo = listTodo;
  let [content, setContent] = useState();
  let [workDay, setWorkDay] = useState();
  let [idUpdate, setIdUpdate] = useState();
  let [showButton, setButton] = useState(true);
  let pad2 = (n) => {
    return (n < 10 ? "0" : "") + n;
  };
  pad2();

  var date = new Date();
  var month = pad2(date.getMonth() + 1);
  var day = pad2(date.getDate());
  var year = date.getFullYear();
  var addTime = year + "-" + month + "-" + day;
  let insertTodo = () => {
    let newData = {
      content,
      workDay,
      addTime,
    };
    dataTodo.unshift(newData);
    showButton = true;
    content = "";
    workDay = addTime;
    setContent(content);
    setWorkDay(workDay);
    setButton(showButton);
  };
  let handleEdit = (e) => {
    let idUpdate = e.target.value;
    let { content, workDay } = dataTodo[idUpdate];
    setContent(content);
    setWorkDay(workDay);
    setIdUpdate(idUpdate);
    showButton = false;
    setButton(showButton);
  };
  let handleDelete = (e) => {
    let idDelete = e.target.value;
    dataTodo.splice(idDelete, 1);
    showButton = true;
    setButton(showButton);
    content = "";
    workDay = addTime;
    setContent(content);
    setWorkDay(workDay);
  };
  let handChangContent = (e) => {
    content = e.target.value;
    setContent(content);
  };
  let handChangWorkDay = (e) => {
    workDay = e.target.value;
    setWorkDay(workDay);
  };
  let updateTodo = () => {
    let dataUpdate = {
      content,
      workDay,
      addTime,
    };
    dataTodo.splice(idUpdate, 1, dataUpdate);
    showButton = true;
    setButton(showButton);
  };
  let destroyTodo = () => {
    showButton = true;
    setButton(showButton);
  };

  return (
    <div className="App">
      <ListContext.Provider
        value={{
          dataTodo,
          content,
          workDay,
          showButton,
          insertTodo: insertTodo,
          updateTodo: updateTodo,
          destroyTodo: destroyTodo,
          handChangContent: handChangContent,
          handChangWorkDay: handChangWorkDay,
          handleEdit: handleEdit,
          handleDelete: handleDelete,
        }}
      >
        <ListTodo />
      </ListContext.Provider>
    </div>
  );
}

export default App;
