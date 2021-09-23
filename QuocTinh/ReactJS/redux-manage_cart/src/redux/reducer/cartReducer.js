import { ADD_CART, DELETE_CART, UPDATE_CART } from "../action/cartAction";
import { manageCart } from "../states";

export let cartReducer = (state = manageCart.carts, action) => {
    let newCARTs;
    switch (action.type) {
        case ADD_CART:
            newCARTs = [...state];
            var arrID = [];
            var newId = -1;
            for (let element of newCARTs) {
                arrID.push(element.id);

            }

            if (arrID.length <= 0) {
                newId = 1;
            } else {
                newId = Math.max(...arrID) + 1;
            }
            let newItem = {
                id: newId, id_user: action.payload.id_user, id_product: action.payload.id_product, count: action.payload.count
            }
            console.log(newItem);
            newCARTs.push(newItem);
            return newCARTs;
        case DELETE_CART:
            newCARTs = [...state];
            console.log(action.payload);
            newCARTs = newCARTs.filter(cart => cart.id !== action.payload);
            return newCARTs;
        case UPDATE_CART:
            newCARTs = [...state];
            // console.log(action.payload.id);
            // console.log(action.payload.count);
            let index = -1;
            for (let i = 0;i < newCARTs.length;i++) {
                index++;
                if (newCARTs[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                // console.log(newCARTs[index]);
                if (action.payload.change === "up") {
                    newCARTs[index].count = action.payload.count + 1;
                } else {
                    newCARTs[index].count = action.payload.count - 1;
                }

                return newCARTs;
            }

    }
    return state;
}