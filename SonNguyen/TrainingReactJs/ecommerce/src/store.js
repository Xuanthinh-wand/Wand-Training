import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import pReducer from "./redux/reducer";
import thunk from "redux-thunk";

export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
