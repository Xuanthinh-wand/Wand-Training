import React, { Component } from 'react';

class Work extends Component {

    render() {
        return (
            <li id={this.props.id} className={this.props.checked} ><span className="close">×</span>{this.props.title}</li>
        );
    }
}

export default Work;
