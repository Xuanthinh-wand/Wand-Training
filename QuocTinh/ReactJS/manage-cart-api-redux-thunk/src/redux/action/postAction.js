export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const GET_POST = "GET_POST";
export const DELETE_POST = "DELETE_POST";
export const loadPosts = () => async dispatch => {
    try {
        dispatch({ type: FETCH_POST_REQUEST });

        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url)
        const responseBody = await response.json();
        dispatch({
            type: FETCH_POST_SUCCESS,
            data: responseBody
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_POST_ERROR,
            message: error
        });
    }
}