function Footer(props) {
    const filters = props.filters;
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{props.lengthTodos}</strong> ghi chú
            </span>
            <ul className='filters'>
                {Object.keys(filters).map((filter, index) => {
                    return (
                        <li key={index}>
                            <a
                                className={filter === props.filter ? 'selected' : undefined}
                                onClick={() => props.handleSwitchFilter(filter)}
                                href={props.filter}>
                                {filter}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {props.lengthTodoCompleted > 0 && (
                <button className='clear-completed' onClick={props.handleClearCompeleted}>
                    clear completed
                </button>
            )}
        </footer>
    );
}
export default Footer;
