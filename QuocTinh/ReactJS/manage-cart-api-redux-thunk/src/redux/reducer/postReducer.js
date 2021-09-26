import ActionButton from "antd/lib/modal/ActionButton";
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR, DELETE_POST } from "../action/postAction";
import { manageCart } from "../states";




const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

function postReducer(state = initialState, action) {
    let newPOSTs;
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: action.data
            };
        case FETCH_POST_ERROR:
            return {
                ...state,
                requesting: false,
                message: action.message
            };

        default:
            return state;
    }
}

export default postReducer;
// const initialState = [];
// function postReducer(state = initialState, action) {
//     switch (action.type) {
//         case SET_POST:
//             return {
//                 ...state,
//                 item: action.payload
//             };

//         default:
//             return state;
//     }
// }

// export default postReducer;
// export let postReducer = (state = manageCart.products, action) => {
//     let newPOSTs;
//     switch (action.type) {
//         case SOME_ACTION:
//             return {
//                 ...state,
//                 data: action.payload
//             }
//         case ADD_POST:
//             newPOSTs = [...state];
//             var arrID = [];
//             var newId = -1;
//             for (let element of newPOSTs) {
//                 arrID.push(element.id);

//             }

//             if (arrID.length <= 0) {
//                 newId = 1;
//             } else {
//                 newId = Math.max(...arrID) + 1;
//             }
//             let newItem = {
//                 id: newId,
//                 title: action.payload.title,
//                 isCompleted: false
//             }
//             console.log(newItem);
//             newPOSTs.push(newItem);
//             return newPOSTs;
//         case DELETE_POST:
//             newPOSTs = [...state];
//             newPOSTs = newPOSTs.filter(POST => POST.id !== action.payload);
//             return newPOSTs;
//         case UPDATE_POST:
//             newPOSTs = [...state];
//             let index = -1;
//             for (let i = 0;i < newPOSTs.length;i++) {
//                 index++;
//                 if (newPOSTs[i].id === action.payload.id) {
//                     break;
//                 }

//             }
//             if (index !== -1) {
//                 newPOSTs[index] = action.payload;
//                 return newPOSTs;
//             }

//     }
//     return state;
// }