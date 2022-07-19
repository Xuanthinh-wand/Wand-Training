import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './components/header';
import TodoList from './components/todoList';
import Footer from './components/footer';
import * as TodoActions from './redux/actions/todos';
import * as FilterActions from './redux/actions/filters';
import Loading from './components/loading';
class App extends React.Component {
    componentDidMount() {
        this.props.actions.fetchData();
    }
    render() {
        const {todoItems, actions, groupFilters, isLoading, filterActions} = this.props;
        let filter = groupFilters.filter;
        let todosRender = [];
        if (filter === 'all') {
            // eslint-disable-next-line no-const-assign
            todosRender = todoItems.filter(() => true);
        }
        if (filter === 'active') {
            // eslint-disable-next-line no-const-assign
            todosRender = todoItems.filter((todo) => !todo.isComplete);
        }
        if (filter === 'completed') {
            // eslint-disable-next-line no-const-assign
            todosRender = todoItems.filter((todo) => todo.isComplete);
        }
        return (
            <div className='App'>
                {isLoading && <Loading />}
                <section className='todoapp'>
                    <Header addTodo={actions.addData} />
                    <TodoList todos={todosRender} actions={actions} />
                    {todoItems.length > 0 && (
                        <Footer
                            todosLength={todosRender.length}
                            groupFilters={groupFilters}
                            switchFilter={filterActions.switchFilter}
                        />
                    )}
                </section>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todoItems: state.Todos.todoItems,
        isLoading: state.Todos.loading,
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
