import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './components/header';
import TodoList from './components/todoList';
import Footer from './components/footer';
import * as TodoActions from './redux/actions/todos';
import * as FilterActions from './redux/actions/filters';
class App extends React.Component {
    render() {
        const {todoItems, actions, groupFilters, filterActions} = this.props;
        console.log('🚀 ~ file: App.js ~ line 13 ~ App ~ render ~ todoItems', todoItems);
        let filter = groupFilters.filter;
        let todosRender = [];
        if (filter === 'all') {
            // eslint-disable-next-line no-const-assign
            todosRender = todoItems.filter(() => true);
        }
        if (filter === 'active') {
            // eslint-disable-next-line no-const-assign
            todosRender = todoItems.filter((todo) => !todo.completed);
        }
        if (filter === 'completed') {
            // eslint-disable-next-line no-const-assign
            todosRender = todoItems.filter((todo) => todo.completed);
        }
        return (
            <div className='App'>
                <section className='todoapp'>
                    <Header addTodo={actions.addTodo} />
                    {/* <TodoList todos={todosRender} actions={actions} /> */}
                    {/* {todoItems.length > 0 && (
                        <Footer
                            todosLength={todosRender.length}
                            groupFilters={groupFilters}
                            switchFilter={filterActions.switchFilter}
                        />
                    )} */}
                </section>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todoItems: state.Todos.todoItems,
        groupFilters: state.GroupFilters,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch),
        filterActions: bindActionCreators(FilterActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
