import {TodoContext} from '../contextAPI/context';
export default function Footer() {
    return (
        <TodoContext.Consumer>
            {(context) => {
                if (context.todos.length > 0) {
                    const todoRender = context.todosRender();
                    return (
                        <footer className='footer'>
                            <span className='todo-count'>
                                <strong>{todoRender.length}</strong> ghi chú
                            </span>
                            <ul className='filters'>
                                {Object.keys(context.filters).map((filter, index) => (
                                    <li key={index}>
                                        <a
                                            onClick={() => context.handleSwitchFilter(filter)}
                                            href={'#' + context.filter}
                                            className={filter === context.filter ? 'selected' : undefined}>
                                            {filter}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </footer>
                    );
                }
            }}
        </TodoContext.Consumer>
    );
}
