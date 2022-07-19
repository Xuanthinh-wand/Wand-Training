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
        const {todo, completeData, deleteData, dbClickEdit} = this.props;
        return (
            <li className={todo.isComplete ? 'completed' : ''} data-id={todo.id}>
                <div className='view'>
                    <input
                        className='toggle'
                        type='checkbox'
                        checked={todo.isComplete}
                        onChange={() => completeData(todo.id, todo.name, !todo.isComplete)}></input>
                    <label onDoubleClick={() => dbClickEdit(todo.id)}>{todo.name}</label>
                    <button className='destroy' onClick={() => deleteData(todo.id)}></button>
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
