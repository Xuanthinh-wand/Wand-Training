import { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import tick from './img/tick.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems: [
      { title: 'Đi chơi', isComplete: true}, 
      { title: 'Đi học', isComplete: true}, 
      { title:  'Ăn cơm', isComplete: false}
    ]
  }
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
}

  onItemClicked(item){
    return(event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event){
    
    if(event.keyCode === 13){
      let text = event.target.value;
      if(!text){
        return;
      }

      text = text.trim();
      if(!text){
        return;
      }
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }
  render(){
    const { todoItems } = this.state;
    if(todoItems.length){
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={30} />
            <TodoInput 
            onChange={this.onChange}
            onKeyUp={this.onKeyUp} />
          </div>
          {
            todoItems.length && todoItems.map((item, index) => 
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />)
          }
        </div>
      );
    }else{
      return(
        <div className="App">Nothing Headers.</div>
      );
    }
  }
}

export default App;
