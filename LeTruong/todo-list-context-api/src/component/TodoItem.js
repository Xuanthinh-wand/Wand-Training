import React from 'react';
import {TodoContext} from '../contextAPI/context';

function TodoItem(props) {
    return (
        <TodoContext.Consumer>
            {(context) => (
                <li className={props.todo.completed ? 'completed' : ''} data-id={props.todo.id}>
                    <div className='view'>
                        <input
                            className='toggle'
                            type='checkbox'
                            onChange={() => context.handleToggle(props.todo.id)}
                            checked={props.todo.completed ? true : false}></input>
                        <label onDoubleClick={() => context.handleDbClick(props.todo.id)}>{props.todo.name}</label>
                        <button className='destroy' onClick={() => context.handleDelete(props.todo.id)}></button>
                    </div>
                    <input
                        className='edit'
                        onBlur={(e) => context.handleEdit(props.todo.id, e.target.value)}
                        onKeyUp={(e) => {
                            if (e.keyCode === 13 || e.keyCode === 27) {
                                context.handleEdit(props.todo.id, e.target.value);
                            }
                        }}
                        defaultValue={props.todo.name}
                    />
                </li>
            )}
        </TodoContext.Consumer>
    );
}
export default TodoItem;
