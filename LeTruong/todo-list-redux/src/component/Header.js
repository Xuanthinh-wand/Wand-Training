import React from 'react';
class Header extends React.Component {
    handleAdd = (name) => {
        if (name) {
            this.props.addTodo(name);
        }
    };
    render() {
        return (
            <header className='header'>
                <h1 className='title'>TodoList</h1>
                <input
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            this.handleAdd(e.target.value);
                            e.target.value = '';
                        }
                    }}
                    className='new-todo'
                    type='text'
                    autoFocus
                    placeholder='Viết công việc vào đây'></input>
            </header>
        );
    }
}
export default Header;
