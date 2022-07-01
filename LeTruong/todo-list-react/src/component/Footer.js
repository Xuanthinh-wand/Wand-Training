function Footer(props) {
    const todos = props.todos;
    const filters = props.filters;
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{todos.length}</strong> ghi chú
            </span>
            <ul className='filters'>
                {Object.keys(filters).map((filter, index) => {
                    return (
                        <li key={index}>
                            <a
                                className={filter === props.filter ? 'selected' : undefined}
                                onClick={() => props.handleSwitchFilter(filter)}
                                href='#'>
                                {filter}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {todos.filter(filters.completed).length > 0 && (
                <button className='clear-completed' onClick={props.handleClearCompeleted}>
                    clear completed
                </button>
            )}
        </footer>
    );
}
export default Footer;
