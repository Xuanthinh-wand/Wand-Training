function TodoItem() {
    return (
        <li>
            <div className='view'>
                <input className='toggle' type='checkbox' />
                <label>Test</label>
                <button className='destroy'></button>
            </div>
            <input className='edit' value='' />
        </li>
    );
}
export default TodoItem;
