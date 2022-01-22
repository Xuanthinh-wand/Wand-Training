function Order(state = null, action) {
  switch (action.type) {
    case "ORDER":
      if (state) {
        state = [...state, action.payload];
        return state;
      } else {
        state = [action.payload];
        return state;
      }

    case "SETTING_ORDER":
      let { id, dataOrder } = action.payload;
      state.splice(id, 1, dataOrder);
      return state;

    default:
      return state;
  }
}

export default Order;
