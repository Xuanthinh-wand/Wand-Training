import TodoItem from './TodoItem';
function TodoList(props) {
    const todos = props.todos;
    let completed = todos.every((todo) => todo.completed === true) ? false : true;
    return (
        <div className='main'>
            <input
                id='toggle-all'
                onChange={() => props.handleToggleAll(completed)}
                type='checkbox'
                className='toggle-all'
                checked={!completed}
            />
            <label htmlFor='toggle-all'>Mark all as complete</label>
            <ul className='todo-list'>
                {todos.map((todo) => (
                    <TodoItem
                        handleDelete={props.handleDelete}
                        handleToggle={props.handleToggle}
                        handleToggleAll={props.handleToggleAll}
                        handleDbClick={props.handleDbClick}
                        handleEditTodo={props.handleEditTodo}
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;