import React, { Component } from 'react';
import { TodoContext } from '../context/TodoContextProvider';

class TodoInput extends Component {
    static contextType = TodoContext;
    constructor(props) {
        super(props);
        this.state = {
            taskInput: ''
        };

    }
    onAdd = (event) => {
        console.log(this.state.taskInput);
        this.setState({
            taskInput: ''
        })
    }
    inputHandeler = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };
    render() {
        const { onAdd } = this.context
        return (
            <div>
                <h2 className="my-4">Trang quản lý To Do List</h2>
                <div id="myDIV" className="header">
                    <h2 className="m-2 mb-4">Danh sách Kế hoạch ngày của Tĩnh</h2>
                    <input type="text" id="myInput" placeholder="Nội dung..." name="taskInput" onChange={(e) => this.inputHandeler(e)} onClick={this.props.add} value={this.state.taskInput} />
                    <span className="addBtn btn btn-success" onClick={() => { onAdd(this.state.taskInput); this.setState({ taskInput: '' }) }}
                    >Thêm</span>


                </div>
            </div>
        );
    }
}

export default TodoInput;
