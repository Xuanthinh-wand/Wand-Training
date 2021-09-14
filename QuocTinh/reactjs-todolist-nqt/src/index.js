import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [
//         { id: 10, title: "Thức dậy", isCompleted: true },
//         { id: 11, title: "Đánh răng, rửa mặt", isCompleted: true },
//         { id: 12, title: "Thể dục", isCompleted: true },
//         { id: 31, title: "Đi làm", isCompleted: false },
//         { id: 14, title: "Ăn trưa", isCompleted: false },
//         { id: 15, title: "Ngủ trưa", isCompleted: false }],
//       taskInput: ''
//     };
//   }
//   state = {
//     tasks: [1, 2, 3, 4],
//     taskInput: ''
//   };

//   add = () => {
//     this.setState(prevState => {
//       let Tasks = prevState.tasks;
//       if (prevState.taskInput) {
//         Tasks.push(prevState.taskInput);
//       }
//       return {
//         tasks: Tasks,
//         taskInput: ''
//       }
//     });
//   };

//   done = (index) => {

//   }

//   remove = (index) => {
//     this.setState(prevState => {
//       let Tasks = prevState.tasks;
//       Tasks.splice(index, 1);
//       return {
//         tasks: Tasks
//       }
//     });
//   };

//   clearList = () => {
//     this.setState(this.state.tasks = []);
//   };

//   inputHandeler = e => {
//     const { value, name } = e.target;
//     this.setState({
//       [name]: value
//     })
//   };

//   render() {
//     return (
//       <div className='container mt-4'>
//         <div className='row justify-content-between'>
//           <input className='col-8' name='taskInput' type='text' value={this.state.taskInput} onChange={this.inputHandeler} />
//           <button className='col-3 btn btn-success' onClick={this.add}>Add</button>
//         </div>
//         <div className='row mt-4'>
//           <button className='btn btn-warning col-12' onClick={this.clearList}>Clear List</button>
//         </div>

//         <ul className='mt-4 list-group'>
//           {
//             this.state.tasks.map((item, index) => {
//               return (
//                 <li className='list-group-item' key={index}>
//                   <input className=' mr-4' type='checkbox' name='taskStatus' />
//                   {item}
//                   <button className='btn btn-danger ml-4' onClick={() => this.remove(index)}>X</button>
//                   <button className='btn btn-success ml-4' onClick={() => this.done(index)}>✔️</button>
//                 </li>
//               )
//             })
//           }
//         </ul>

//       </div>
//     )
//   }
// }

// ReactDOM.render(<List />, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
