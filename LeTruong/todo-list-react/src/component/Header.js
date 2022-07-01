function Header(props) {
    return (
        <header className='header'>
            <h1>Todo List</h1>
            <input
                // onBlur={(e) => props.handleAdd(e.target.value)}
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        props.handleAdd(e.target.value);
                    }
                }}
                className='new-todo'
                type='text'
                autoFocus
                placeholder='Viết công việc vào đây'></input>
        </header>
    );
}
export default Header;
