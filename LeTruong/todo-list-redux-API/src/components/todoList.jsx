import React from 'react';
import TodoItem from './todoItem';

export default class TodoList extends React.Component {
    render() {
        const {todos, actions} = this.props;

        return (
            <div className='main'>
                <input id='toggle-all' type='checkbox' className='toggle-all' />
                <label htmlFor='toggle-all'>Mark all as complete</label>
                <ul className='todo-list'>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    ))}
                </ul>
            </div>
        );
    }
}
