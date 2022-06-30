import TodoItem from './TodoItem';
function TodoList() {
    return (
        <div className='main'>
            <input id='toggle-all' type='checkbox' className='toggle-all' />
            <label htmlFor='toggle-all'>Mark all as complete</label>
            <ul className='todo-list'>
                <TodoItem />
            </ul>
        </div>
    );
}
export default TodoList;
