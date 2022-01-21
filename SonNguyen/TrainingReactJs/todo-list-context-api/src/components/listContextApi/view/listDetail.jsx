import React, { useContext } from "react";
import { ListContext } from "../../../App";

function ListDetail() {
  const { dataTodo, handleEdit, handleDelete } = useContext(ListContext);
  return (
    <>
      {dataTodo.map((val, key) => (
        <div className="todoGroup" key={key}>
          <div className="content">{val.content}</div>
          <div className="workDay">{val.workDay}</div>
          <div className="addTime">{val.addTime}</div>
          <div className="setting">
            <button className="edit" onClick={handleEdit} value={key}>
              Sửa
            </button>
            <button className="delete" onClick={handleDelete} value={key}>
              Xóa
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default ListDetail;
