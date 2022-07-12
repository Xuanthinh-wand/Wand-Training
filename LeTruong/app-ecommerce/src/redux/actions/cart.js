export const addCart = (userId, productId) => {
    return {
        type: 'ADD_CART',
        userId,
        productId,
    };
};

export const editCart = (id, quantity) => {
    return {
        type: 'EDIT_CART',
        id,
        quantity,
    };
};

export const deleteCart = (id) => {
    return {
        type: 'DELETE_CART',
        id,
    };
};
