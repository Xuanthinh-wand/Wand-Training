import {v4 as uuidv4} from 'uuid';
let initState = {
    productItems: JSON.parse(localStorage.getItem('persist:root')) || [],
};

const Products = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const newProduct = {
                id: uuidv4(),
                name: action.name,
                description: action.description,
                imageUrl: action.imageUrl,
            };
            return {
                productItems: [...state.productItems, newProduct],
            };
        default:
            return state;
    }
};
export default Products;
