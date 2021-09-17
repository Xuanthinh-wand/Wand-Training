import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(todo.title)
    const [checked, setChecked] = useState(todo.isCompleted)
    let dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {todo.isCompleted ?
                        <li className="checked" onClick={() => {
                            dispatch(updateTodo({
                                ...todo,
                                title: title,
                                isCompleted: !checked
                            }))
                            // if (edit) {
                            //     setTitle(todo.title);
                            // }
                            // setEdit(!edit);
                        }}
                        ><span className="close" onClick={() => dispatch(deleteTodo(todo.id))}>×</span>

                            <span>{todo.title}</span>
                        </li>
                        :
                        <li onClick={() => {
                            dispatch(updateTodo({
                                ...todo,
                                title: title,
                                isCompleted: !checked
                            }))
                            // if (edit) {
                            //     setTitle(todo.title);
                            // }
                            // setEdit(!edit);
                        }}
                        ><span className="close" onClick={() => dispatch(deleteTodo(todo.id))}>×</span>
                            <span>{todo.title}</span>
                        </li>
                    }
                </div>
            </div>
        </div>
    );
}


export default TodoItem;
