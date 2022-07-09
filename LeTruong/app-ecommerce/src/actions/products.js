export const addProduct = (name, description, imageUrl) => {
    return {
        type: 'ADD_PRODUCT',
        name,
        description,
        imageUrl,
    };
};
