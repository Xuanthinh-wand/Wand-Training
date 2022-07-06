import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import TodoList from './component/TodoList';
import {TodoProvider} from './contextAPI/context';

function App() {
    return (
        <div className='App'>
            <TodoProvider>
                <section className='todoapp'>
                    <Header />
                    <TodoList />
                    <Footer />
                </section>
            </TodoProvider>
        </div>
    );
}

export default App;
