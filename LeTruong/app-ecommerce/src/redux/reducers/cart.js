import {v4 as uuidv4} from 'uuid';
let data = JSON.parse(localStorage.getItem('persist:carts'));
let listCart = [];
if (data) {
    listCart = data.listCart;
}
let initState = {
    listCart: listCart,
};

const Carts = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const newCart = {
                id: uuidv4(),
                userId: action.userId,
                productId: action.productId,
                quantity: 1,
            };
            const carts = state.listCart;
            const isExist = carts.find(
                (cart) => cart.userId === newCart.userId && cart.productId === newCart.productId,
            );
            if (isExist) {
                isExist.quantity += 1;
            }
            return {
                listCart: isExist ? carts : [...state.listCart, newCart],
            };
        case 'EDIT_CART':
            return {
                listCart: state.listCart.map((cart) =>
                    cart.id === action.id
                        ? Object.assign({}, cart, {quantity: parseInt(action.quantity) > 0 ? action.quantity : 1})
                        : cart,
                ),
            };
        case 'DELETE_CART':
            return {
                listCart: state.listCart.filter((cart) => cart.id !== action.id),
            };
        default:
            return state;
    }
};
export default Carts;
