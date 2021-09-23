import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../action/productAction";
import { manageCart } from "../states";

export let productReducer = (state = manageCart.products, action) => {
    let newPRODUCTs;
    switch (action.type) {
        case ADD_PRODUCT:
            newPRODUCTs = [...state];
            var arrID = [];
            var newId = -1;
            for (let element of newPRODUCTs) {
                arrID.push(element.id);

            }

            if (arrID.length <= 0) {
                newId = 1;
            } else {
                newId = Math.max(...arrID) + 1;
            }
            let newItem = {
                id: newId,
                title: action.payload.title,
                isCompleted: false
            }
            console.log(newItem);
            newPRODUCTs.push(newItem);
            return newPRODUCTs;
        case DELETE_PRODUCT:
            newPRODUCTs = [...state];
            newPRODUCTs = newPRODUCTs.filter(PRODUCT => PRODUCT.id !== action.payload);
            return newPRODUCTs;
        case UPDATE_PRODUCT:
            newPRODUCTs = [...state];
            let index = -1;
            for (let i = 0;i < newPRODUCTs.length;i++) {
                index++;
                if (newPRODUCTs[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newPRODUCTs[index] = action.payload;
                return newPRODUCTs;
            }

    }
    return state;
}