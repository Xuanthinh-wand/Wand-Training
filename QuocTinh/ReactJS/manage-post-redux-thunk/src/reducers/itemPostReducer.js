import * as Types from "../constants/ActionType";
var initialState = [];

const itemPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_POST:
            return action.post;
    }
    return state;
}
export default itemPostReducer;