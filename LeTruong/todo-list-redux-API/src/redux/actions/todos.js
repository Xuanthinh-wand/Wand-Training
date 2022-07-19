export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        fetch('https://localhost:7297/api/todoitems')
            .then((res) => res.json())
            .then(
                (result) => {
                    dispatch(fetchDataSuccess(result));
                },
                (error) => {
                    alert(error);
                    dispatch(fetchDataError());
                },
            );
    };
};

export const addData = (value) => {
    if (value) {
        return (dispatch) => {
            fetch('https://localhost:7297/api/todoitems', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json',
                },
                body: JSON.stringify({
                    name: value,
                }),
            })
                .then((res) => res.json())
                .then(
                    (result) => {
                        dispatch(addTodo(result));
                    },
                    (error) => {
                        alert(error);
                        dispatch(fetchDataError());
                    },
                );
            const eleNewTodo = document.querySelector('.new-todo');
            eleNewTodo.value = '';
        };
    }
};

export const deleteData = (id) => {
    return (dispatch) => {
        fetch(`https://localhost:7297/api/todoitems/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    dispatch(deleteTodo(result));
                },
                (error) => {
                    alert(error);
                    dispatch(fetchDataError());
                },
            );
    };
};

export const completeData = (id, name, status) => {
    return (dispatch) => {
        fetch(`https://localhost:7297/api/todoitems/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
            },
            body: JSON.stringify({
                id: id,
                isComplete: status,
                name,
            }),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    dispatch(completedTodo(result));
                },
                (error) => {
                    alert(error);
                    dispatch(fetchDataError());
                },
            );
    };
};

export const fetchDataRequest = () => {
    return {
        type: 'FetchDataRequest',
    };
};
export const fetchDataSuccess = (data) => {
    return {
        type: 'FetchDataSuccess',
        payload: data,
    };
};
export const fetchDataError = () => {
    return {
        type: 'FetchDataError',
    };
};

export const addTodo = (data) => {
    return {
        type: 'AddTodo',
        payload: data,
    };
};
export const deleteTodo = (data) => {
    return {
        type: 'DeleteTodo',
        payload: data,
    };
};
export const completedTodo = (data) => {
    return {
        type: 'CompletedTodo',
        payload: data,
    };
};
export const dbClickEdit = (id) => {
    return {
        type: 'DbClickEdit',
        id,
    };
};
export const editTodo = (id, value) => {
    return {
        type: 'EditTodo',
        id,
        value,
    };
};
