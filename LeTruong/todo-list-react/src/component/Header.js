function Header(props) {
    return (
        <header className='header'>
            <h1>Todo List</h1>
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.onChange}
                    value={props.task}
                    className='new-todo'
                    type='text'
                    autoFocus
                    placeholder='Viết công việc vào đây'></input>
            </form>
        </header>
    );
}
export default Header;
