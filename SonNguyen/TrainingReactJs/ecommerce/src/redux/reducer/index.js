import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import Cart from "./cart";
import Order from "./order";
import Products from "./products";
import { Users, Login } from "./user";

const reduxStore = combineReducers({
  products: Products,
  users: Users,
  accountLogin: Login,
  cart: Cart,
  order: Order,
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, reduxStore);
export default pReducer;
