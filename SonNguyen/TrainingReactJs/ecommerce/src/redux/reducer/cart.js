let initinalState = {
  cart: null,
};
function Cart(state = initinalState, action) {
  switch (action.type) {
    case "ADD_CART":
      return { cart: action.payload };
    case "UPDATE_CART":
      return { cart: action.payload.cart };
    case "REMOVE_CART":
      let { products, totalQty, totalPrice } = state.cart;
      totalQty -= products[action.payload.id].qty;
      totalPrice -=
        products[action.payload.id].price * products[action.payload.id].qty;
      products.splice(action.payload.id, 1);
      let newCart = { products, totalQty, totalPrice };
      return { cart: newCart };
    case "REMOVE_ALL_CART":
      return { cart: null };
    default:
      return state;
  }
}

export default Cart;
