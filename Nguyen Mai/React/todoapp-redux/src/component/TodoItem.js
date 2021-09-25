import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './Todo.css';
import {deleteTodo, updateTodo} from '../redux/actions';

function TodoItem({todo}){
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    return(
        <div className="row">
            <div className="col">
                {editable ?
                    <input type="text" className="form-control"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    :
                    <h4>{todo.name}</h4>}
            </div>
            <button className="btn btn-primary" onClick={() => {
                dispatch(updateTodo({
                    ...todo,
                    name: name
                }))
                if(editable){
                    setName(todo.name);
                }
                setEditable(!editable);
            }}>{editable?"Update":"Edit"}</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger">Delete</button>
        </div>
    )
}

export default TodoItem;