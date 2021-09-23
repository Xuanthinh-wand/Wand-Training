import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoItem extends Component {
    onRemoveNote() {
        var { index, onRemove } = this.props;
        onRemove(index);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {this.props.todo.isCompleted ?

                            <div className="row">
                                <li className="checked col-11" onClick={(index) => this.props.todoUpdate(this.props.index)}
                                >
                                    <span>{this.props.todo.title}</span>
                                </li>
                                <button className="col-1 btn btn-danger" onClick={(index) => this.props.todoDelete(this.props.index)}>DELETE</button>
                            </div>
                            :
                            <div className="row">
                                <li className="col-11" onClick={(index) => this.props.todoUpdate(this.props.index)}
                                >
                                    <span>{this.props.todo.title}</span>
                                </li>
                                <button className="col-1 btn btn-danger" onClick={(index) => this.props.todoDelete(this.props.index)}>DELETE</button>
                            </div>

                        }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.todos,
        editStatus: state.editStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        todoDelete: (index) => {
            dispatch({ type: 'DELETE', number: index })
        },
        todoUpdate: (index) => {
            dispatch({ type: 'UPDATE', number: index })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);