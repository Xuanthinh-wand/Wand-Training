import * as Types from "../constants/ActionType";
var initialState = [];

const postReducer = (state = initialState, action) => {
    var index = -1;
    var { id, post } = action;
    var findIndex = (posts, id) => {
        var result = -1;
        posts.forEach((post, index) => {
            if (post.id === id) {
                result = index;
            }
        });
        return result;
    }
    switch (action.type) {
        case Types.FETCH_POSTS:
            state = action.posts;
            return [...state];
        case Types.DELETE_POSTS:
            index = findIndex(state, id)
            state.splice(index, 1);
            return [...state];
        case Types.ADD_POSTS:
            state.push(action.post)
            return [...state];
        case Types.UPDATE_POSTS:
            index = findIndex(state, post.id);
            state[index] = post;
            return [...state]
        default: return [...state];
    }
}
export default postReducer;