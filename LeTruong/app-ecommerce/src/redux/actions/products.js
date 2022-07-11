export const addProduct = (name, description, price, imageUrl) => {
    return {
        type: 'ADD_PRODUCT',
        name,
        description,
        price,
        imageUrl,
    };
};

export const editProduct = (id, name, description, price, imageUrl) => {
    return {
        type: 'EDIT_PRODUCT',
        id,
        name,
        description,
        price,
        imageUrl,
    };
};

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        id,
    };
};
