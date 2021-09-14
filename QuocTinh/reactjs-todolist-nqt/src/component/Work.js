import React, { Component } from 'react';

class Work extends Component {

    onClickChecked = () => {
        this.props.onClickChecked(this.props.index);
    }
    onDelete = () => {
        this.props.onDelete(this.props.index);
    }
    render() {
        return (
            <li id={this.props.id} className={this.props.checked} onClick={this.onClickChecked} ><span className="close" onClick={this.onDelete}>×</span>{this.props.title}</li>
        );
    }
}

export default Work;
