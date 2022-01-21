import React, { useContext } from "react";
import { ListContext } from "../../../App";
import ListDetail from "./listDetail";
import "../../listContextApi/css/list.css";

function ListTodo() {
  let {
    content,
    workDay,
    showButton,
    insertTodo,
    updateTodo,
    destroyTodo,
    handChangContent,
    handChangWorkDay,
  } = useContext(ListContext);

  let button;
  if (showButton) {
    button = <button onClick={insertTodo}>Gửi</button>;
  } else {
    button = (
      <div>
        <button onClick={updateTodo}>Cập nhật</button>
        <button onClick={destroyTodo}>Hủy</button>
      </div>
    );
  }
  return (
    <>
      <div className="todoList">
        <h2>Todo List - Context API</h2>
        <div className="screen_input">
          <textarea
            id="content"
            placeholder="Nhập nội dung..."
            rows="5"
            value={content}
            onChange={handChangContent}
          ></textarea>
          <input
            id="workDay"
            type="date"
            value={workDay}
            onChange={handChangWorkDay}
          />
          {button}
        </div>
        <div className="todoGroup">
          <div className="content">Nội dung</div>
          <div className="workDay">Ngày làm</div>
          <div className="addTime">Ngày tạo</div>
          <div className="setting">Tùy chọn</div>
        </div>
        <div className="groupContent" id="groupContent">
          <ListDetail />
        </div>
      </div>
    </>
  );
}
export default ListTodo;
