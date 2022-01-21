import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import pReducer from "./redux/reducer";

export const store = createStore(pReducer);
export const persistor = persistStore(store);
