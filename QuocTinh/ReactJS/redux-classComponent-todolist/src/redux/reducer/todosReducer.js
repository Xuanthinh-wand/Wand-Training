const todosInitialState = [
    { id: 1, title: "Thức dậy", isCompleted: true },
    { id: 2, title: "Đánh răng, rửa mặt", isCompleted: true },
    { id: 3, title: "Thể dục", isCompleted: true },
    { id: 4, title: "Đi làm", isCompleted: false },
    { id: 5, title: "Ăn trưa", isCompleted: false },
    { id: 6, title: "Ngủ trưa", isCompleted: false }];
const todosReducer = (state = todosInitialState, action) => {
    let newTodos;
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newItem]
        case "DELETE":
            console.log(action.number);
            return state.filter((e, i) => i !== action.number)
        case "UPDATE":

            newTodos = [...state];
            if (action.number >= 0) {
                newTodos[action.number].isCompleted = !newTodos[action.number].isCompleted;
                return newTodos;
            }
        default:
            return state;
    }
}
export default todosReducer;