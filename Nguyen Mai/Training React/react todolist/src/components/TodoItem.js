import { Component } from "react";
import './TodoItem.css';
import checkImg from '../img/check-mark.svg';
import checkComplete from '../img/check.svg';
import classNames from "classnames";

class TodoItem extends Component{
    render() {
        const { item, onClick } = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkComplete;
        }
        return (
        <div className={classNames(
            'TodoItem',
            {
                'TodoItem-complete': item.isComplete
            })}>
            <img onClick={onClick} src={url} width = {32} />
            <p> {this.props.item.title} </p>
            
        </div>
        );
    }
}

export default TodoItem;