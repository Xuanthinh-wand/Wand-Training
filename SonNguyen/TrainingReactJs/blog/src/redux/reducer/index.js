import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { comment } from "./comment";
import { contact } from "./contact";
import { account } from "./user";
import { writeContent } from "./write-content";

const reduxStore = combineReducers({
  account: account,
  post: writeContent,
  contact: contact,
  comment: comment,
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, reduxStore);
export default pReducer;
