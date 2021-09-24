import { useSelector } from "react-redux";
import { ADD_CART, DELETE_CART, UPDATE_CART } from "../action/cartAction";
import { manageCart } from "../states";

export let cartReducer = (state = manageCart.carts, action) => {
    // let userlogined = useSelector(state => state.userlogined);
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
            let kt = false;
            for (let item of newCARTs) {
                if ((item.id_user === newItem.id_user) && (item.id_product === newItem.id_product))
                    kt = true;
            }
            if (kt == false) {
                newCARTs.push(newItem);
            }
            return newCARTs;
        case DELETE_CART:
            newCARTs = [...state];
            console.log(action.payload);
            newCARTs = newCARTs.filter(cart => cart.id !== action.payload);
            return newCARTs;
        case UPDATE_CART:
            newCARTs = [...state];
            let index = -1;
            for (let i = 0;i < newCARTs.length;i++) {
                index++;
                if (newCARTs[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1 && action.payload.count > 0) {
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