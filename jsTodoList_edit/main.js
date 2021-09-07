function runTodoList(config) {
    // Selectors
    const todoInput = document.querySelector(config.todoInputClass);
    const todoButton = document.querySelector(config.todoButtonClass);
    const todoForm = document.querySelector(config.todoFormClass);
    const todoList = document.querySelector(config.todoListClass);

    let todos = []

    todoForm.addEventListener('submit', function (event) {
        // prevent the page from reloading when submitting the form
        event.preventDefault();
        addTodo(todoInput.value); // call addTodo function with input box current value
        console.log(todos)
    });

    //function add todo
    function addTodo(item) {
        // if item is not empty
        if (item !== '') {
            // make a todo object: id, item, completed
            const todo = {
                id: Date.now(),
                name: item,
                completed: false
            };

            // add todo in array
            todos.push(todo);
            addToLocalStorage(todos); // then store it in localStorage

            // clear input
            todoInput.value = '';
        }
    }

    // function to render given todos to screen
    function renderTodos(todos) {
        // clear everything inside <ul> with class=todo-list
        todoList.innerHTML = '';
        todos.forEach(function (item) {
            // check if the item is completed
            const checked = item.completed ? 'checked' : null;
            //create li todo list
            const newTodo = document.createElement("li");
            newTodo.setAttribute("class", "todo-item");
            newTodo.setAttribute("data-id", item.id)
            // if item is completed
            if (item.completed === true) {
                newTodo.classList.add('checked');
            }
            newTodo.innerHTML = `
            <input type="checkbox" class="checkbox" ${checked}>
            ${item.name}
            <button class="delete-btn">x</button>`;
            // add the <li> to the <ul>
            todoList.append(newTodo);
        })
    }
    // function to add todos to local storage
    function addToLocalStorage(todos) {
        // conver the array to string then store it.
        localStorage.setItem('todos', JSON.stringify(todos));
        // render them to screen
        renderTodos(todos);
    }
    // function helps to get everything from local storage
    function getFromLocalStorage() {
        const reference = localStorage.getItem('todos');
        // if reference exists
        if (reference) {
            // converts back to array and store it in todos array
            todos = JSON.parse(reference);
            renderTodos(todos);
        }
    }

    // initially get everything from localStorage
    getFromLocalStorage();


    // toggle the value to completed and not completed
    function toggle(id) {
        todos.forEach(function (item) {
            // use == not ===, because here types are different. One is number and other is string
            if (item.id == id) {
                // toggle the value
                item.completed = !item.completed;
            }
        });
        console.log(todos)

        addToLocalStorage(todos);
    }

    // deletes a todo from todos array, then updates localstorage and renders updated list to screen
    function deleteTodo(id) {
        // filters out the <li> with the id and updates the todos array
        todos = todos.filter(function (item) {
            // use != not !==, because here types are different. One is number and other is string
            return item.id != id;
        });
        console.log(todos)

        // update the localStorage
        addToLocalStorage(todos);
    }

    // after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-btn and checkbox
    todoList.addEventListener('click', function (event) {
        // check if the event is on checkbox
        if (event.target.type === 'checkbox') {
            // toggle the state
            toggle(event.target.parentElement.getAttribute('data-id'));
        }

        // check if that is a delete-button
        if (event.target.classList.contains('delete-btn')) {
            // get id from data-id value of parent <li> where the delete-btn is present
            deleteTodo(event.target.parentElement.getAttribute('data-id'));
        }
    });
}