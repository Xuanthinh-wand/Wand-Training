function TodoItem(props) {
    return (
        <li key={props.index} className={props.todo.completed && 'completed'}>
            <div className='view'>
                <input
                    className='toggle'
                    onClick={() => props.handleToggle(props.index)}
                    checked={props.todo.completed ? true : false}
                    type='checkbox'
                />
                <label>{props.todo.task}</label>
                <button className='destroy' onClick={() => props.handleDelete(props.index)}></button>
            </div>
            <input className='edit' />
        </li>
    );
}
export default TodoItem;
