import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import './Todo.css';
import { useDispatch } from "react-redux";

function TodoInput(){
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return(
        <div className="row">
            <input value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text" className="col form-control"></input>
            <button className="btn btn-primary" onClick={() => {
                dispatch(addTodo({
                    name: name
                }));
                setName('')
            }}>Add</button>
        </div>
    )
}

export default TodoInput;