function Footer() {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>0</strong> ghi chú
            </span>
            <ul className='filters'>
                <li>
                    <a className='selected' href='#'>
                        All
                    </a>
                </li>
                <li>
                    <a href='#'>Active</a>
                </li>
                <li>
                    <a href='#'>Completed</a>
                </li>
            </ul>
            <button className='clear-completed'>clear completed</button>
        </footer>
    );
}
export default Footer;
