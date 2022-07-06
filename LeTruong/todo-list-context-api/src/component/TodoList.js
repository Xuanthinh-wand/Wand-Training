import TodoItem from './TodoItem';
import {TodoContext} from '../contextAPI/context';
export default function TodoList() {
    return (
        <TodoContext.Consumer>
            {(context) => {
                const status = context.todos.every((todo) => todo.completed === true);
                const todoRender = context.todosRender();
                return (
                    <div className='main'>
                        <input
                            onChange={() => context.handleToggleAll(status)}
                            id='toggle-all'
                            type='checkbox'
                            className='toggle-all'
                            checked={status}
                        />
                        <label htmlFor='toggle-all'>Mark all as complete</label>
                        <ul className='todo-list'>
                            {todoRender.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} />
                            ))}
                        </ul>
                    </div>
                );
            }}
        </TodoContext.Consumer>
    );
}
