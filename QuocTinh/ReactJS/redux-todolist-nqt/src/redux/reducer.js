import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            var arrID = [];
            var newId = -1;
            for (let element of newTodos) {
                arrID.push(element.id);

            }

            if (arrID.length <= 0) {
                newId = 1;
            } else {
                newId = Math.max(...arrID) + 1;
            }
            let newItem = {
                id: newId,
                title: action.payload.title,
                isCompleted: false
            }
            console.log(newItem);
            newTodos.push(newItem);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0;i < newTodos.length;i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}