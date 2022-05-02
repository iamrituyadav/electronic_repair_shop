import { legacy_createStore } from "redux";
import { authReducer } from "./reducer";
import rootReducer from "./rootReducer";

export const store = legacy_createStore(authReducer);
