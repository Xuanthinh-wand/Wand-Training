import TodoItem from './TodoItem';
function TodoList(props) {
    const todos = props.todos;
    const filters = props.filters;
    const filter = props.filter;
    return (
        <div className='main'>
            <input id='toggle-all' type='checkbox' className='toggle-all' />
            <label htmlFor='toggle-all'>Mark all as complete</label>
            <ul className='todo-list'>
                {todos.filter(filters[filter]).map((todo, index) => (
                    <TodoItem
                        handleDelete={props.handleDelete}
                        handleToggle={props.handleToggle}
                        key={index}
                        index={index}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;
