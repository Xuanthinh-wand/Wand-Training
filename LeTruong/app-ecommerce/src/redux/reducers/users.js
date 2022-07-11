import {v4 as uuidv4} from 'uuid';
let data = JSON.parse(localStorage.getItem('persist:root'));
let initState = {
    // listUser: data.Users,
    listUser: [],
};
console.log('🚀 ~ file: users.js ~ line 6 ~ initState', initState.listUser);

const Users = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {
                id: uuidv4(),
                name: action.name,
                password: action.password,
            };

            return [...state.listUser, newUser];
        default:
            return state;
    }
};

export default Users;
