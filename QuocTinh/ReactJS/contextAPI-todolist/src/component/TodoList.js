import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContextProvider';

class TodoList extends Component {
    static contextType = TodoContext
    render() {
        const { arrayWorks, onDelete, onClickChecked } = this.context
        return (
            <div className="my-4">
                <ul id="myUL">
                    {arrayWorks.map((todo, index) => {
                        return <TodoItem key={index} index={index} todo={todo} onDelete={onDelete} onClickChecked={onClickChecked} />;
                    })}
                </ul>

            </div>
        );
    }
}

export default TodoList;
