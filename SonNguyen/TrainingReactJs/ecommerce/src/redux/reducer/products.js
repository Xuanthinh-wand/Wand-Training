import products from "../../db/products";

function Products(state = products, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      state = [action.payload, ...state];
      return state;
    case "REMOVE_PRODUCTS":
      state.splice(action.payload.id, 1);
      return state;
    case "UPDATE_PRODUCTS":
      let { id, name, price, details } = action.payload;
      let newProducts = { name, price, details };
      state.splice(id, 1, newProducts);
      return state;
    default:
      return state;
  }
}

export default Products;
