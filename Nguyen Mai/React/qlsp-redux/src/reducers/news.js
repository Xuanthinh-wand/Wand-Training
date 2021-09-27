const initialState = {
    items: []
  };
  
  export default function items(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case "FETCH_SUCCESS":
        return {
          ...state,
          items: [...state.items, ...payload.items],
          loading: false
        };
     
      case 'REMOVE':
        return {
          ...state,
          items: state.items.filter(value => value.id !== action.id)
        };
      default:
        return state;
    }
  }
  