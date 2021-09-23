export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const UPDATE_CART = "UPDATE_CART";

export function addCART(cart) {
    return {
        type: ADD_CART,
        payload: cart,
    }
}

export function deleteCART(cart) {
    return {
        type: DELETE_CART,
        payload: cart,
    }
}

export function updateCART(cart) {
    return {
        type: UPDATE_CART,
        payload: cart,
    }
}