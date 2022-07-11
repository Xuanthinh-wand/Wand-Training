export const addUser = (name, password) => {
    return {
        type: 'ADD_USER',
        name,
        password,
    };
};
export const loggin = (name, password) => {
    return {
        type: 'LOGGIN',
        name,
        password,
    };
};
