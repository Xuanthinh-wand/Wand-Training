const addCart = (products, totalQty, totalPrice) => ({
  type: "ADD_CART",
  payload: {
    products,
    totalQty,
    totalPrice,
  },
});

const updateCart = (id, products, totalQty, totalPrice) => ({
  type: "UPDATE_CART",
  payload: {
    id,
    products,
    totalQty,
    totalPrice,
  },
});

const removeCart = (id) => ({
  type: "REMOVE_CART",
  payload: {
    id,
  },
});

export { addCart, updateCart, removeCart };
