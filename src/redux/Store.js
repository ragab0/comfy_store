import { bindActionCreators, legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import productsReducer from "./slices/products/Products";


const rootReducer = combineReducers({
  products: productsReducer,
})


const store = legacy_createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware));


export default store;