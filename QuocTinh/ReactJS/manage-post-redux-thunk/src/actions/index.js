import * as Types from "../constants/ActionType";
import callAPI from "../utils/apiCaller";

export const actFetchPostsRequest = (posts) => {
    return (dispatch) => {
        return callAPI('posts', 'GET', null).then(res => {
            dispatch(actFetchPosts(res.data));
        })
    }
}
export const actFetchPosts = (posts) => {
    return {
        type: Types.FETCH_POSTS,
        posts
    }
}
export const actDeletePostRequest = (id) => {
    return (dispatch) => {
        return callAPI(`posts/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeletePost(id))
        })
    }
}
export const actDeletePost = (id) => {
    return {
        type: Types.DELETE_POSTS,
        id
    }
}
export const actAddPostRequest = (post) => {
    return (dispatch) => {
        return callAPI('posts', 'POST', post).then(res => {
            dispatch(actAddPost(res.data));
        })
    }
}
export const actAddPost = (post) => {
    return {
        type: Types.ADD_POSTS,
        post
    }
}
export const actGetPostRequest = (id) => {
    return (dispatch) => {
        return callAPI(`posts/${id}`, 'GET', null).then(res => {
            dispatch(actGetPost(res.data));
        })
    }
}
export const actGetPost = (post) => {
    return {
        type: Types.EDIT_POST,
        post
    }
}
export const actUpdatePostRequest = (post) => {
    return (dispatch) => {
        return callAPI(`posts/${post.id}`, 'PUT', post).then(res => {
            dispatch(actUpdatePost(res.data));
        })
    }
}
export const actUpdatePost = (post) => {
    return {
        type: Types.UPDATE_POSTS,
        post
    }
}