
import { LOGIN, LOGOUT } from "../action/loginAction";
import { manageCart } from "../states";

export let loginReducer = (state = manageCart.user_loged, action) => {
    let newLogined = null;
    switch (action.type) {
        case LOGIN:
            var listUser = [...manageCart.users];
            for (let user of manageCart.users) {
                if ((user.user_name === action.payload.user_name) && (user.password === action.payload.password)) {
                    newLogined = user;//{ id: 1, user_name: action.payload.user_name, password: action.payload.password, full_name: "NQT" };
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