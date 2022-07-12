import {v4 as uuidv4} from 'uuid';
let data = JSON.parse(localStorage.getItem('persist:users'));
let listUser = [];
if (data) {
    listUser = data.listUser;
}
let initState = {
    listUser: listUser,
    isLoggin: false,
    userLoggin: -1,
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
            return isUser ? {...state, userLoggin: isUser.id, isLoggin: true} : {...state};
        case 'LOGGOUT':
            return {...state, userLoggin: -1, isLoggin: false};
        default:
            return state;
    }
};

export default Users;
