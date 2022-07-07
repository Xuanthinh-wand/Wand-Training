import './App.css';
import Header from './component/Header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from './redux/Action';
import TodoList from './component/TodoList';
import Footer from './component/Footer';
import React from 'react';
class App extends React.Component {
    render() {
        const {todos, actions, groupFilters} = this.props;
        console.log('🚀 ~ file: App.js ~ line 12 ~ App ~ render ~ groupFilters', groupFilters);
        const filters = groupFilters.filters;
        const filter = groupFilters.filter;
        const todosRender = todos.filter(filters[filter]);
        return (
            <div className='App'>
                <section className='todoapp'>
                    <Header addTodo={actions.addTodo} />
                    <TodoList todos={todosRender} actions={actions} groupFilters={groupFilters} />
                    {todos.length > 0 && (
                        <Footer
                            todosLength={todosRender.length}
                            groupFilters={groupFilters}
                            switchFilter={actions.switchFilter}
                        />
                    )}
                </section>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todos: state.todos,
        groupFilters: state.groupFilters,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
