import { Component } from "react";
import './TodoItem.css';

class TodoInput extends Component {
    
    render(){
        const { newItem, onChange, onKeyUp } = this.props;
        return(
            <div className="Header">
                <input 
                type="text" 
                placeholder="Thêm nhắc nhở" 
                value={newItem}
                onChange={onChange}
                onKeyUp={onKeyUp} />
            </div>
        )
        
    }
}

export default TodoInput;