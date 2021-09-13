
import './App.css';

import React, { Component } from 'react';
// import Work from './component/Work';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayElement: [
        { id: 1, title: "Thức dậy", isCompleted: true },
        { id: 2, title: "Đánh răng, rửa mặt", isCompleted: true },
        { id: 3, title: "Thể dục", isCompleted: true },
        { id: 4, title: "Đi làm", isCompleted: false },
        { id: 5, title: "Ăn trưa", isCompleted: false },
        { id: 6, title: "Ngủ trưa", isCompleted: false }],
      taskInput: ''
    };

  }
  add = () => {
    var arrA = [];
    var newId;
    for (let element of this.state.arrayElement) arrA.push(element.id);
    if (arrA.length <= 0) {
      newId = 1;
    } else {
      newId = Math.max(...arrA) + 1;
    }
    let Tasks = this.state.arrayElement;
    let push = {
      id: newId,
      title: this.state.taskInput,
      isCompleted: false
    }
    console.log(push.title);
    if (push.title !== '') {
      Tasks.push(push);
    } else {
      alert("Bạn cần nhập nội dung!");
    }
    this.setState({
      arrayElement: Tasks,
      taskInput: ''
    });
  };
  inputHandeler = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  remove = (index) => {
    let Tasks = this.state.arrayElement;
    if (Tasks[index] !== undefined) {
      Tasks.splice(index, 1);
      this.setState({
        arrayElement: Tasks
      });
    }
  };
  onDone = (index) => {

    let Tasks = this.state.arrayElement;
    console.log(Tasks[index]);
    if (Tasks[index] !== undefined) {
      Tasks[index].isCompleted = !Tasks[index].isCompleted;
      this.setState({
        arrayElement: Tasks
      });
    }
  }
  render() {
    let element = this.state.arrayElement.map((work, index) => {
      if (work.isCompleted) return <li key={index} id={work.id} className="checked" onClick={() => this.onDone(index)}><span className="close" onClick={() => this.remove(index)}>×</span>{work.title}</li>
      else
        return <li key={index} id={work.id} className="" onClick={() => this.onDone(index)}><span className="close" onClick={() => this.remove(index)}>×</span>{work.title}</li>
    });
    return (
      <div className="container">
        <h2 className="my-4">Trang quản lý To Do List</h2>
        <div id="myDIV" className="header">
          <h2 className="m-2 mb-4">Danh sách Kế hoạch ngày của Tĩnh</h2>
          <input type="text" id="myInput" placeholder="Nội dung..." name="taskInput" value={this.state.taskInput} onChange={this.inputHandeler} />
          <span className="addBtn btn btn-success" onClick={this.add}>Thêm</span>
        </div>
        <ul id="myUL">
          {element}
        </ul>
      </div>
    );
  }
}
export default App;
