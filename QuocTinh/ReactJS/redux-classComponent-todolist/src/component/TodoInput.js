import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoInput extends Component {
    onSubmit(e) {
        e.preventDefault();
        var { dispatch } = this.props;
        var arrTodos = this.props.data;
        var arrID = [];
        var newId = -1;
        for (let element of arrTodos) {
            arrID.push(element.id);
        }

        if (arrID.length <= 0) {
            newId = 1;
        } else {
            newId = Math.max(...arrID) + 1;
        }
        dispatch({ type: 'ADD_NEW', newItem: { id: newId, title: this.refs.txt.value, isCompleted: false } })
        this.refs.txt.value = '';
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                {console.log(this.props.data)}
                <h2 className="my-4">Trang quản lý To Do List</h2>
                <div id="myDIV" className="header">
                    <h2 className="m-2 mb-4">Danh sách Kế hoạch ngày của Tĩnh</h2>
                    <input type="text" id="myInput" placeholder="Nội dung..." ref="txt" />
                    <button className="addBtn btn btn-success" type="submit">Thêm</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.todos,
        editStatus: state.editStatus
    }
}
export default connect(mapStateToProps)(TodoInput);