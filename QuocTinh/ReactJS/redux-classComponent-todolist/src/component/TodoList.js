
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <ul id="myUL">
                {this.props.data.map((todo, index) => {
                    return <TodoItem key={index} index={index} todo={todo} />;
                })}
            </ul>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.todos,
        editStatus: state.editStatus
    }
}

export default connect(mapStateToProps)(TodoList);