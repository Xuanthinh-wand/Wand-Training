import { createStore, applyMiddleware, compose } from "redux";
import persistStore from "redux-persist/es/persistStore";
import pReducer from "./redux/reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
