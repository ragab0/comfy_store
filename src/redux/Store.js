import { bindActionCreators, legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

// import rightFilterReducer, { rightFilterActionsCreators } from "./slices/right_filter/RightFilter";
// import topFilterReducer, { topFilterActionsCreators } from "./slices/top_fitler/TopFilter";
import productsReducer, { productsActionsCreators } from "./slices/products/Products";


const rootReducer = combineReducers({
  // rightFilterReducer,
  // topFilterReducer,
  productsReducer,
})


const store = legacy_createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware));
const productsActions = bindActionCreators(productsActionsCreators, store.dispatch)
// const rightFilterActions = bindActionCreators(rightFilterActionsCreators, store.dispatch);
// const topFilterActions = bindActionCreators(topFilterActionsCreators, store.dispatch);

productsActions.fetchApi();

export default store;