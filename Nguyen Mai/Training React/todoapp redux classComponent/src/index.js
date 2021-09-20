import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/store"
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
</Provider>
, rootElement);
