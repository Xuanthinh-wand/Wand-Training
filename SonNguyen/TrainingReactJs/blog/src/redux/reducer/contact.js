let initinalState = {
  contact: [],
};

const contact = (state = initinalState, action) => {
  switch (action.type) {
    case "SEND_CONTACT":
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };

    default:
      return state;
  }
};
export { contact };
