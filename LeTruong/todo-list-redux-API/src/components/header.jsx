import React from 'react';
class Header extends React.Component {
    handleSubmit = (value) => {
        if (value) {
            this.props.addTodo(value);
        }
    };

    render() {
        return (
            <header className='header'>
                <h1 className='title'>TodoList</h1>
                <input
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            this.handleSubmit(e.target.value);
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
