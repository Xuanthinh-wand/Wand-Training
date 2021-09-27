import axios from "axios"

export const fetchSuccess = items => ({
    type: "FETCH_SUCCESS",
    payload: { items }
})


export const fetchData = url => {
  return dispatch => {
      axios.get(url)
        .then(response => dispatch(fetchSuccess(response.data)))
        
    };
}

export const removeData = id => ({
  type: "REMOVE",
  id
})