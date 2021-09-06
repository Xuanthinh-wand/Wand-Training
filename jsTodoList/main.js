function runTodoList(config) {
    // Selectors
    const todoInput = document.querySelector(config.todoInputClass);
    const todoButton = document.querySelector(config.todoButtonClass);
    const todoList = document.querySelector(config.todoListClass);

    //event Listeners 
    todoButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", deleteTodo)
    // Functions
    function addTodo(todo) {
        todo.preventDefault(); //prevent form from submit
        //to do div
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")
        //create li todo list
        const newTodo = document.createElement("li")
        newTodo.innerHTML = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //check complete button
        const completeButton = document.createElement("button")
        completeButton.innerHTML = `<i class='fas fa-check'></i>`
        completeButton.classList.add("complete-btn")
        todoDiv.appendChild(completeButton)

        //remove completed button
        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = `<i class="fas fa-minus-circle"></i>`
        deleteButton.classList.add("delete-btn")
        todoDiv.appendChild(deleteButton)

        // Append to list 
        todoList.appendChild(todoDiv)
        //clear input
        todoInput.value = ''
    }

    function deleteTodo(todo) {
        const item = todo.target; // return element trigger event
        //check complete
        if (item.classList[0] === "complete-btn") {
            const todo = item.parentElement; //returns the parent element of the specified element
            todo.classList.add("completed")
        }
        // todo delete
        if (item.classList[0] === "delete-btn") {
            const todo = item.parentElement;
            todo.classList.add("removed");
            todo.addEventListener("transitionend", function () {
                todo.remove();
            }//The transitionend event occurs when a CSS transition has completed
            );
        }
    }
}
