import {v4 as uuidv4} from 'uuid';
let data = JSON.parse(localStorage.getItem('persist:products'));
let listProduct = [];
if (data) {
    listProduct = data.items;
}
let initState = {
    items: listProduct,
};
const Products = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const newProduct = {
                id: uuidv4(),
                name: action.name,
                description: action.description,
                price: action.price,
                imageUrl: action.imageUrl,
            };
            return {
                items: [...state.items, newProduct],
            };

        case 'EDIT_PRODUCT':
            return {
                items: state.items.map((product) =>
                    product.id === action.id
                        ? Object.assign({}, product, {
                              name: action.name,
                              description: action.description,
                              price: action.price,
                              imageUrl: action.imageUrl,
                          })
                        : product,
                ),
            };
        case 'DELETE_PRODUCT':
            return {
                items: state.items.filter((product) => product.id !== action.id),
            };

        default:
            return state;
    }
};
export default Products;
