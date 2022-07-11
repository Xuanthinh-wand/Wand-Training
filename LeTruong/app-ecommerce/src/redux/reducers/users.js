import {v4 as uuidv4} from 'uuid';
let data = JSON.parse(localStorage.getItem('persist:root'));
let listUser = [];
if (data) {
    listUser = data.Users;
}
let initState = {
    listUser: listUser,
    isLoggin: false,
};

const Users = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {
                id: uuidv4(),
                name: action.name,
                password: action.password,
            };
            return {
                ...state,
                listUser: [...state.listUser, newUser],
            };
        case 'LOGGIN':
            const isUser = state.listUser.find(
                (user) => user.name === action.name && user.password === action.password,
            );
            return isUser ? {...state, isLoggin: true} : {...state};
        default:
            return state;
    }
};

export default Users;
