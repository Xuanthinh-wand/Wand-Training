import './App.css';
import Header from './component/Header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from './redux/Action';
import TodoList from './component/TodoList';
import React from 'react';
class App extends React.Component {
    render() {
        const {todos, actions} = this.props;
        return (
            <div className='App'>
                <section className='todoapp'>
                    <Header addTodo={actions.addTodo} />
                    <TodoList todos={todos} actions={actions} />
                </section>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todos: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
