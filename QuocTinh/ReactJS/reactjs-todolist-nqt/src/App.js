
import './App.css';

import React, { Component } from 'react';
import Work from './component/Work';
import AddWork from './component/AddWork';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayWorks: [
        { id: 1, title: "Thức dậy", isCompleted: true },
        { id: 2, title: "Đánh răng, rửa mặt", isCompleted: true },
        { id: 3, title: "Thể dục", isCompleted: true },
        { id: 4, title: "Đi làm", isCompleted: false },
        { id: 5, title: "Ăn trưa", isCompleted: false },
        { id: 6, title: "Ngủ trưa", isCompleted: false }]
    };

  }
  onAdd = (data) => {
    var arrId = [];
    var newId;
    for (let element of this.state.arrayWorks) arrId.push(element.id);
    if (arrId.length <= 0) {
      newId = 1;
    } else {
      newId = Math.max(...arrId) + 1;
    }
    let listWords = this.state.arrayWorks;
    let push = {
      id: newId,
      title: data,
      isCompleted: false
    }
    if (push.title !== '') {
      listWords.push(push);
    } else {
      alert("Bạn cần nhập nội dung!");
    }
    this.setState({
      arrayWorks: listWords
    });
  }
  onDelete = (index) => {
    let listWords = this.state.arrayWorks;
    if (listWords[index] !== undefined) {
      listWords.splice(index, 1);
      this.setState({
        arrayWorks: listWords
      });
    }
  }
  onClickChecked = (index) => {
    let listWords = this.state.arrayWorks;
    if (listWords[index] !== undefined) {
      listWords[index].isCompleted = !listWords[index].isCompleted;
      this.setState({
        arrayWorks: listWords
      });
    }
  }
  render() {
    let createWord = this.state.arrayWorks.map((work, index) => {
      if (work.isCompleted) return <Work key={index} index={index} id={work.id} checked={"checked"} title={work.title} onDelete={this.onDelete} onClickChecked={this.onClickChecked} />
      else
        return <Work key={index} index={index} id={work.id} checked={""} title={work.title} onDelete={this.onDelete} onClickChecked={this.onClickChecked} />
    });
    return (
      <div className="container">
        <h5>{this.state.taskInput}</h5>
        <AddWork onAdd={this.onAdd} />
        <ul id="myUL">
          {createWord}
        </ul>
      </div>
    );
  }
}
export default App;
