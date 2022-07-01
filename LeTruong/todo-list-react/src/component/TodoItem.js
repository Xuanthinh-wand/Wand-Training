function TodoItem(props) {
    function onKeyUp(e) {
        if (e.keyCode === 13 || e.keyCode === 27) {
            props.handleEditTodo(props.index, e.target.value);
        }
    }
    return (
        <li key={props.index} className={props.todo.completed ? 'completed' : ''}>
            <div className='view'>
                <input
                    className='toggle'
                    onChange={() => props.handleToggle(props.index)}
                    checked={props.todo.completed ? true : false}
                    type='checkbox'
                />
                <label onDoubleClick={() => props.handleDbClick(props.index)}>{props.todo.task}</label>
                <button className='destroy' onClick={() => props.handleDelete(props.index)}></button>
            </div>
            <input
                className='edit'
                onBlur={(e) => props.handleEditTodo(props.index, e.target.value)}
                onKeyUp={(e) => onKeyUp(e)}
                defaultValue={props.todo.task}
            />
        </li>
    );
}
export default TodoItem;
