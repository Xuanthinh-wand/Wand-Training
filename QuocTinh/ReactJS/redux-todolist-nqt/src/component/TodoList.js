import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
    let todos = useSelector(state => state);

    return (
        <div className="my-4">
            <ul id="myUL">
                {todos.map((todo, index) => {
                    if (todo.isCompleted) {
                        return <TodoItem key={index} todo={todo} />;
                    } else {
                        return <TodoItem key={index} todo={todo} />;
                    }

                })}
            </ul>

        </div>
    )
}

export default TodoList;
