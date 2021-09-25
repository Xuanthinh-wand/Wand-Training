import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
