export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export function addPRODUCT(product) {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

export function deletePRODUCT(product) {
    return {
        type: DELETE_PRODUCT,
        payload: product,
    }
}

export function updatePRODUCT(product) {
    return {
        type: UPDATE_PRODUCT,
        payload: product,
    }
}