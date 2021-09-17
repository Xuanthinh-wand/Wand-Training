import React, { Component, useState } from 'react';
import { addTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

function TodoInput() {
    const [title, setTitle] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <h2 className="my-4">Trang quản lý To Do List</h2>
            <div id="myDIV" className="header">
                <h2 className="m-2 mb-4">Danh sách Kế hoạch ngày của Tĩnh</h2>
                {/* <form onSubmit = {this.onSubmit}> */}
                <input type="text" id="myInput" placeholder="Nội dung..." name="taskInput" value={title} onChange={(e) => setTitle(e.target.value)} />
                <span className="addBtn btn btn-success" onClick={() => {
                    dispatch(addTodo({
                        title: title
                    }
                    ));
                    setTitle('');
                }}
                >Thêm</span>
                {/* </form> */}


            </div>
        </div>
    );
}
// class TodoInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             taskInput: ''
//         };

//     }
//     onAdd = (event) => {
//         event.preventDefault();
//         this.props.onAdd(this.state.taskInput);
//         this.setState({
//             taskInput: ''
//         })
//     }
//     inputHandeler = (event) => {
//         var target = event.target;
//         var name = target.name;
//         var value = target.value;
//         this.setState({
//             [name]: value
//         });
//         // this.props.newWork(value);
//     };
//     render() {
//         return (
//             <div>
//                 <h2 className="my-4">Trang quản lý To Do List</h2>
//                 <div id="myDIV" className="header">
//                     <h2 className="m-2 mb-4">Danh sách Kế hoạch ngày của Tĩnh</h2>
//                     {/* <form onSubmit = {this.onSubmit}> */}
//                     <input type="text" id="myInput" placeholder="Nội dung..." name="taskInput" onChange={(e) => this.inputHandeler(e)} onClick={this.props.add} value={this.state.taskInput} />
//                     <span className="addBtn btn btn-success" onClick={this.onAdd}>Thêm</span>
//                     {/* </form> */}


//                 </div>
//             </div>
//         );
//     }
// }

export default TodoInput;