import React from 'react';

function TodoItem({ todo, onDelete, onClickChecked, index }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {todo.isCompleted ?
                        <li className="checked" onClick={() => onClickChecked(index)}
                        ><span className="close" onClick={() => onDelete(index)} >×</span>

                            <span>{todo.title}</span>
                        </li>
                        :
                        <li onClick={() => onClickChecked(index)}
                        ><span className="close" onClick={() => onDelete(index)}>×</span>
                            <span>{todo.title}</span>
                        </li>
                    }
                </div>
            </div>
        </div>
    );
}


export default TodoItem;
