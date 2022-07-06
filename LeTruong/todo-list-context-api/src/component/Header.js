import {TodoContext} from '../contextAPI/context';
export default function Header() {
    return (
        <header className='header'>
            <h1 className='title'>TodoList</h1>
            <TodoContext.Consumer>
                {(context) => (
                    <input
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                                context.handleAdd(e.target.value);
                                e.target.value = '';
                            }
                        }}
                        className='new-todo'
                        type='text'
                        autoFocus
                        placeholder='Viết công việc vào đây'></input>
                )}
            </TodoContext.Consumer>
        </header>
    );
}
