const addCart = (products, totalQty, totalPrice) => ({
  type: "ADD_CART",
  payload: {
    products,
    totalQty,
    totalPrice,
  },
});

const updateCart = (cart) => ({
  type: "UPDATE_CART",
  payload: {
    cart,
  },
});

const removeCart = (id) => ({
  type: "REMOVE_CART",
  payload: {
    id,
  },
});

const removeAllCart = () => ({
  type: "REMOVE_ALL_CART",
});

export { addCart, updateCart, removeCart, removeAllCart };
