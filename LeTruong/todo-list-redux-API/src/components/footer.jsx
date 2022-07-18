import React from 'react';
export default class Footer extends React.Component {
    render() {
        const filterTarget = this.props.groupFilters.filter;
        const filters = this.props.groupFilters.filters;
        return (
            <footer className='footer'>
                <span className='todo-count'>
                    <strong>{this.props.todosLength}</strong> ghi chú
                </span>
                <ul className='filters'>
                    {filters.map((filter, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className={filter === filterTarget ? 'selected' : undefined}
                                    onClick={() => this.props.switchFilter(filter)}
                                    href={'#' + filter}>
                                    {filter}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                {/* {props.lengthTodoCompleted > 0 && (
                <button className='clear-completed' onClick={props.handleClearCompeleted}>
                    clear completed
                </button>
            )} */}
            </footer>
        );
    }
}
