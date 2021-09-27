import { LOGIN, LOGOUT } from "../actions/login";
let manageLogin = {
    users: [
        { id: 1, user_name: "mai", password: "111" },
        { id: 2, user_name: "mai", password: "222" }
    ],
    user_loged: null
}

let todoLogin = (state = manageLogin.user_loged, action) => {
    let newLogined = null;
    switch (action.type) {
        case LOGIN:
            for (let user of manageLogin.users) {
                if ((user.user_name === action.payload.user_name) && (user.password === action.payload.password)) {
                    newLogined = user;
                }
            }
            state = newLogined;
            return state;
        case LOGOUT:
            state = newLogined;
            return state;

    }
    return state;
}
export default todoLogin;