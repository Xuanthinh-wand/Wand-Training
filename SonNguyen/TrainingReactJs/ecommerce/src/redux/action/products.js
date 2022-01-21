const createProducts = (name, price, details) => ({
  type: "ADD_PRODUCTS",
  payload: {
    name,
    price,
    details,
  },
});

const updateProducts = (id, name, price, details) => ({
  type: "UPDATE_PRODUCTS",
  payload: {
    id,
    name,
    price,
    details,
  },
});

const removeProducts = (id) => ({
  type: "REMOVE_PRODUCTS",
  payload: {
    id,
  },
});

export { createProducts, updateProducts, removeProducts };
