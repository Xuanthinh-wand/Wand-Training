function TodoItem(props) {
    function onKeyUp(e) {
        if (e.keyCode === 13 || e.keyCode === 27) {
            props.handleEditTodo(props.todo.id, e.target.value);
        }
    }
    return (
        <li key={props.todo.id} className={props.todo.completed ? 'completed' : ''} data-id={props.todo.id}>
            <div className='view'>
                <input
                    className='toggle'
                    onChange={() => props.handleToggle(props.todo.id)}
                    checked={props.todo.completed ? true : false}
                    type='checkbox'
                />
                <label onDoubleClick={() => props.handleDbClick(props.todo.id)}>{props.todo.name}</label>
                <button className='destroy' onClick={() => props.handleDelete(props.todo.id)}></button>
            </div>
            <input
                className='edit'
                onBlur={(e) => props.handleEditTodo(props.todo.id, e.target.value)}
                onKeyUp={(e) => onKeyUp(e)}
                defaultValue={props.todo.name}
            />
        </li>
    );
}
export default TodoItem;
