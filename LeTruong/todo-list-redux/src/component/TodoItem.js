import React from 'react';

class TodoItem extends React.Component {
    handleSaveTodo = (id, value) => {
        if (value) {
            this.props.editTodo(id, value);
        } else {
            this.props.deleteTodo(id);
        }
    };

    render() {
        const {todo, completedTodo, deleteTodo, dbClickEdit} = this.props;
        return (
            <li data-id={todo.id}>
                <div className='view'>
                    <input className='toggle' type='checkbox' onChange={() => completedTodo(todo.id)}></input>
                    <label onDoubleClick={() => dbClickEdit(todo.id)}>{todo.name}</label>
                    <button className='destroy' onClick={() => deleteTodo(todo.id)}></button>
                </div>
                <input
                    className='edit'
                    defaultValue={todo.name}
                    onBlur={(e) => {
                        this.handleSaveTodo(todo.id, e.target.value.trim());
                    }}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13 || e.keyCode === 27) {
                            this.handleSaveTodo(todo.id, e.target.value.trim());
                        }
                    }}
                />
            </li>
        );
    }
}
export default TodoItem;
