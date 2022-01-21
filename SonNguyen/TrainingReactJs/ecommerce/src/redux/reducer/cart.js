function Cart(state = null, action) {
  switch (action.type) {
    case "ADD_CART":
      state = action.payload;
      return state;
    case "UPDATE_CART":
      let { id, name, password, role } = action.payload;
      let newUsers = { name, password, role };
      state.splice(id, 1, newUsers);
      return state;
    case "REMOVE_CART":
      let { products, totalQty, totalPrice } = state;
      totalQty -= products[action.payload.id].qty;
      totalPrice -=
        products[action.payload.id].price * products[action.payload.id].qty;
      products.splice(action.payload.id, 1);
      let newCart = { products, totalQty, totalPrice };
      state = newCart;
      return state;
    default:
      return state;
  }
}

export default Cart;
